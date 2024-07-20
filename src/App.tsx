import styled, { createGlobalStyle, keyframes, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/header";
import WhyChooseUs from "./components/why-choose-us";
import WhatWeClean from "./components/what-we-clean";
import Carousel from "./components/carousel";
import ContactUs from "./components/contact-us";

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
const StyledAppWrapper = styled.div`
  animation: ${fadeIn} 2s ease-out;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Rubik", sans-serif;
    
  }
  h1, h2, h3, h4, h5 {
    padding: 0;
    margin: 0;
    font-weight: 400;
  }
  p, span {
    font-weight: 300;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledAppWrapper dir="rtl">
        <Header />
        <WhyChooseUs />
        <WhatWeClean />
        <Carousel title="לקוחות מספרים:" />
        <ContactUs />
      </StyledAppWrapper>
    </ThemeProvider>
  );
};
export default App;
