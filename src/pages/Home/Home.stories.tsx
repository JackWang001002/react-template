import React from 'react';
import { wrapComponentIntoRedux } from '../../../test/helper';

import Home from './Home';

export default {
  title: 'Example/Home',
  component: Home,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const homePage: () => React.ReactElement = () => wrapComponentIntoRedux(Home);
