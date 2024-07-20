import { StyledHeaderContentWrapper, StyledHeaderImg, StyledHeaderSubtitle, StyledHeaderTitle, StyledHeaderWrapper } from "./styled";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContentWrapper>
        <StyledHeaderTitle>ניקוי ספות וריפודים מקצועי</StyledHeaderTitle>
        <StyledHeaderSubtitle>ניקוי ספות עושים עם רמי מתחייב ל-100% ניקיון והסרת כתמים קשים עם הציוד המתקדם בעולם.</StyledHeaderSubtitle>
        <StyledHeaderImg src="./images/main.png" />
      </StyledHeaderContentWrapper>
    </StyledHeaderWrapper>
  );
};
export default Header;
