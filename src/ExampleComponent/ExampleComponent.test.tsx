import React from 'react';
import { render } from '@testing-library/react';

import ExampleComponent, { ExampleComponentProps } from './ExampleComponent';

describe('ExampleComponent', () => {
  let props: ExampleComponentProps;

  beforeEach(() => {
    props = {
      foo: 'bar',
    };
  });

  const renderComponent = () => render(<ExampleComponent {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();

    const component = getByTestId('ExampleComponent');

    expect(component).toHaveTextContent('harvey was here');
  });
});
