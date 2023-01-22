import React from 'react';
import * as S from './ExampleComponent.styles';

export interface ExampleComponentProps {
  foo: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ foo }) => {
  return <S.Wrapper data-testid="ExampleComponent">{foo}</S.Wrapper>;
};

export default ExampleComponent;
