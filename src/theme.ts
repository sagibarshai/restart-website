import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  palette: {
    colors: {
      backgrounds: {
        aquaDark: "rgba(193, 229, 232, 1)",
        aquaLight: "rgba(213, 255, 247, 0.6)",
        purple: "rgba(213, 218, 255, 1)",
      },
      texts: {
        black: "rgba(0, 0, 0, 1)",
      },
    },
  },
  spaces: {
    xl: "50px",
    l: "25px",
    m: "16px",
    s: "8px",
    xs: "4px",
  },
  fonts: {
    sizes: {
      title: "50px",
      subtitle: "24px",
      text: "16px",
    },
  },
};
