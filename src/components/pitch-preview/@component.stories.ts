import './index';

import { PitchPreviewInterface } from './pitchPreview.interfaces';
import notes from './README.md';
import changelog from './CHANGELOG.md';
import packagejson from './package.json';
import { generateDocs } from '../shared/functions';

export default {
  parameters: {
    docs: {
      description: {
        component: generateDocs(notes, changelog, packagejson),
      },
    },
    actions: {
      handles: ['click', 'click .btn'],
    },
  },
  argTypes: {
    props: {
      control: 'text',
      description: 'prop of the example component',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  title: 'Components/pitch-preview',
};

const PitchPreview = (args: PitchPreviewInterface): HTMLElement => {
  const element = document.createElement('pitch-preview');
  if (args.props) {
    element.setAttribute('props', args.props);
  }
  return element;
};

export const Basic = PitchPreview.bind({});
