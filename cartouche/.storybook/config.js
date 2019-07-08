import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import requireContext from 'require-context.macro';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme);

addDecorator(withKnobs);

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
});
addDecorator(withA11y);

addParameters({
  backgrounds: [{ name: 'twitter', value: '#00aced' }, { name: 'facebook', value: '#3b5998' }],
});

const req = requireContext('../src/stories', true, /\.stories\.tsx$/);

function loadStories() {
  // require('../src/stories/index.stories.tsx');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
