module.exports = (componentName) => ({
  content: `import React from 'react';
import * as S from './${componentName}.styles';

export interface ${componentName}Props {
  foo: string;
}

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => {
  return <S.Wrapper data-testid="${componentName}">{foo}</S.Wrapper>;
};

export default ${componentName};
`,
  extension: `.tsx`,
});
