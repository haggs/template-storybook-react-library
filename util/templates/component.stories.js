module.exports = (componentName) => ({
  content: `import React from 'react';
import ${componentName} from './${componentName}';

export default {
  title: '${componentName}',
  component: ${componentName},
  argTypes: {
    foo: { control: 'text' },
  },
};

export const Template = (args) => <${componentName} {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  foo: 'bar',
};
`,
  extension: `.stories.tsx`,
});
