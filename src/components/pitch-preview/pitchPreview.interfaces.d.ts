/**
 * Add here the custom interfaces that will be used in the component
 */
/**
 * The data we want to pass to the main template of the component
 */
export interface PitchPreviewInterface {
  props?: any;
}

export interface PitchResultInterface {
  previousHertz: number;
  hertz: number;
  note: string;
  previousNote: string;
  smoothingThreshold: number;
  smoothingCountThreshold: number;
  smoothingCount: number;
}
