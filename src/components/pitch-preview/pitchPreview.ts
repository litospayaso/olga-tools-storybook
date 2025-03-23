/* eslint-disable @typescript-eslint/unbound-method */
import { html, css, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';

export default class ExampleComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @state() audioEnabled = false;
  @state() analyser: AnalyserNode;
  @state() audioContext: AudioContext;
  @state() hertz: number;
  @state() note: string;

  @property({ type: String }) set props(value: string) {
    console.log('%c value', 'background: #df03fc; color: #f8fc03', value);
  }

  protected firstUpdated(): void {
    let source;
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.minDecibels = -100;
    this.analyser.maxDecibels = -10;
    this.analyser.smoothingTimeConstant = 0.85;
    if (!navigator?.mediaDevices?.getUserMedia) {
      this.audioEnabled = false;
      return;
    } else {
      const constraints = { audio: true };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.audioEnabled = true;
          // Initialize the SourceNode
          source = this.audioContext.createMediaStreamSource(stream);
          // Connect the source node to the analyzer
          source.connect(this.analyser);
          this.processInput();
        })
        .catch(() => {
          this.audioEnabled = false;
        });
    }
  }

  private processInput() {
    requestAnimationFrame(() => this.processInput());
    const bufferLength = this.analyser.fftSize;
    const buffer = new Float32Array(bufferLength);
    this.analyser.getFloatTimeDomainData(buffer);
    const autoCorrelateValue = this.autoCorrelate(buffer, this.audioContext.sampleRate);

    this.hertz = Math.round(autoCorrelateValue);
    this.note = this.noteFromPitch(autoCorrelateValue);

    // const smoothingValue = document.querySelector('input[name="smoothing"]:checked').value;

    // if (autoCorrelateValue === -1) {
    //   document.getElementById('note').innerText = 'Too quiet...';
    //   return;
    // }
    // if (smoothingValue === 'none') {
    //   smoothingThreshold = 99999;
    //   smoothingCountThreshold = 0;
    // } else if (smoothingValue === 'basic') {
    //   smoothingThreshold = 10;
    //   smoothingCountThreshold = 5;
    // } else if (smoothingValue === 'very') {
    //   smoothingThreshold = 5;
    //   smoothingCountThreshold = 10;
    // }
    // const noteIsSimilarEnough = () => {
    //   // Check threshold for number, or just difference for notes.
    //   if (typeof valueToDisplay == 'number') {
    //     return Math.abs(valueToDisplay - previousValueToDisplay) < smoothingThreshold;
    //   } else {
    //     return valueToDisplay === previousValueToDisplay;
    //   }
    // };
    // // Check if this value has been within the given range for n iterations
    // if (noteIsSimilarEnough()) {
    //   if (smoothingCount < smoothingCountThreshold) {
    //     smoothingCount++;
    //     return;
    //   } else {
    //     previousValueToDisplay = valueToDisplay;
    //     smoothingCount = 0;
    //   }
    // } else {
    //   previousValueToDisplay = valueToDisplay;
    //   smoothingCount = 0;
    //   return;
    // }
    // if (typeof valueToDisplay == 'number') {
    //   valueToDisplay += ' Hz';
    // }

    // document.getElementById('note').innerText = valueToDisplay;
  }

  private autoCorrelate(buffer: Float32Array, sampleRate: number) {
    // Perform a quick root-mean-square to see if we have enough signal
    let SIZE = buffer.length;
    let sumOfSquares = 0;
    for (let i = 0; i < SIZE; i++) {
      const val = buffer[i];
      sumOfSquares += val * val;
    }
    const rootMeanSquare = Math.sqrt(sumOfSquares / SIZE);
    if (rootMeanSquare < 0.01) {
      return -1;
    }

    // Find a range in the buffer where the values are below a given threshold.
    let r1 = 0;
    let r2 = SIZE - 1;
    const threshold = 0.2;

    // Walk up for r1
    for (let i = 0; i < SIZE / 2; i++) {
      if (Math.abs(buffer[i]) < threshold) {
        r1 = i;
        break;
      }
    }

    // Walk down for r2
    for (let i = 1; i < SIZE / 2; i++) {
      if (Math.abs(buffer[SIZE - i]) < threshold) {
        r2 = SIZE - i;
        break;
      }
    }

    // Trim the buffer to these ranges and update SIZE.
    buffer = buffer.slice(r1, r2);
    SIZE = buffer.length;

    // Create a new array of the sums of offsets to do the autocorrelation
    const c = new Array(SIZE).fill(0);
    // For each potential offset, calculate the sum of each buffer value times its offset value
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE - i; j++) {
        c[i] = c[i] + buffer[j] * buffer[j + i];
      }
    }

    // Find the last index where that value is greater than the next one (the dip)
    let d = 0;
    while (c[d] > c[d + 1]) {
      d++;
    }

    // Iterate from that index through the end and find the maximum sum
    let maxValue = -1;
    let maxIndex = -1;
    for (let i = d; i < SIZE; i++) {
      if (c[i] > maxValue) {
        maxValue = c[i];
        maxIndex = i;
      }
    }

    let T0 = maxIndex;

    // Not as sure about this part, don't @ me
    // From the original author:
    // interpolation is parabolic interpolation. It helps with precision. We suppose that a parabola pass through the
    // three points that comprise the peak. 'a' and 'b' are the unknowns from the linear equation system and b/(2a) is
    // the "error" in the abscissa. Well x1,x2,x3 should be y1,y2,y3 because they are the ordinates.
    const x1 = c[T0 - 1];
    const x2 = c[T0];
    const x3 = c[T0 + 1];

    const a = (x1 + x3 - 2 * x2) / 2;
    const b = (x3 - x1) / 2;
    if (a) {
      T0 = T0 - b / (2 * a);
    }

    return sampleRate / T0;
  }

  private noteFromPitch(frequency: number): string {
    const noteStrings = [
      'Do',
      'Do#',
      'Re',
      'Re#',
      'Mi',
      'Fa',
      'Fa#',
      'Sol',
      'Sol#',
      'La',
      'La#',
      'Si',
    ];
    const noteNum = 12 * (Math.log(frequency / 440) / Math.log(2));
    return noteStrings[Math.round(noteNum) + (69 % 12)];
  }

  render(): TemplateResult<1> {
    return html`
      <div>
        <h1>${this.hertz} Hz</h1>
        <h1>Note: ${this.note}</h1>
      </div>
    `;
  }
}
