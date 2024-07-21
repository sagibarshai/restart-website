import { StyledHeaderContentWrapper, StyledHeaderImg, StyledHeaderSubtitle, StyledHeaderTitle, StyledHeaderWrapper } from "./styled";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContentWrapper>
        <img height={100} src="./images/logo.png" />
        <StyledHeaderTitle>ניקוי ספות וריפודים מקצועי</StyledHeaderTitle>
        <StyledHeaderSubtitle>ניקוי ספות עושים עם Restart, נקיון והסרת כתמים קשים עם ציוד וחומרים מתקדמים </StyledHeaderSubtitle>
        <StyledHeaderImg src="./images/main.png" />
      </StyledHeaderContentWrapper>
    </StyledHeaderWrapper>
  );
};
export default Header;
