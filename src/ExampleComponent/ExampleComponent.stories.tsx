import React from 'react';
import ExampleComponent from './ExampleComponent';

export default {
  title: 'ExampleComponent',
  component: ExampleComponent,
  argTypes: {
    foo: { control: 'text' },
  },
};

export const Template = (args) => <ExampleComponent {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  foo: 'bar',
};
