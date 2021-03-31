import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    headingFont: string;
    white: string;
    accent: string;
    textColor: string;
    cardColor: string;
    inputColor: string;
    inputTransparent: string;
  }
}
