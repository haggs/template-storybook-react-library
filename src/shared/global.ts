import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  // Your global styles for your components go here
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;
