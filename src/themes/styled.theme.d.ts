import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    font: string;
    shadow: string;
    Colors: {
      gray: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
      };
      purple: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };
      blue: {
        1: string;
        2: string;
      };
      green: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };
      orange: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
      };
    };
    fontSize: {
      8: string;
      10: string;
      12: string;
      14: string;
      16: string;
      18: string;
      20: string;
      22: string;
      24: string;
      26: string;
      28: string;
      30: string;
      32: string;
    };
    fontWeight: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    iconButtonSize: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
declare module '*.svg' {
  const content: string;
  export default content;
}
