import { createGlobalStyle, css } from 'styled-components';
import { reset } from './Reset';

export const bodyStyles = css`
  /* font-family: 'Montserrat', sans-serif; */
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
`;

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body, #__next {
      ${bodyStyles}
  }
`;
