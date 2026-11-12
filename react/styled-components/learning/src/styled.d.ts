import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    dark: {
      primary: string;
      text: string;
    };
    light: {
      primary: string;
      text: string;
    };
    fontFamily: {
      font: string;
    };
  }
}
