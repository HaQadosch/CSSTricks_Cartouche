import React from 'react';

import { storiesOf } from '@storybook/react';
import { Cartouche } from '../components/Cartouche';

storiesOf('Cartouche', module).add('with text', () => <Cartouche content='Pancake muffin chocolate syrup brownie.' />, {
  notes: 'A very simple example of addon notes',
});
