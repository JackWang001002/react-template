import React from 'react';

import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Other: () => React.ReactElement = () => (
  <Button
    {...{
      size: 'small',
      label: 'other',
      primary: true,
    }}
  />
);
