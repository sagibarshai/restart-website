import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      colors: {
        backgrounds: {
          aquaLight: string;
          aquaDark: string;
          purple: string;
        };
        texts: {
          black: string;
        };
      };
    };
    spaces: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    fonts: {
      sizes: {
        title: string;
        subtitle: string;
        text: string;
      };
    };
  }
}
