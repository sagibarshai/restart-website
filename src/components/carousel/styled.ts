import styled from "styled-components";

export const StyledCarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spaces.l};
`;

export const StyledCarouselContentWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xl};
`;

export const StyledCarouselTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.title};
`;

export const StyledCarouselArrowsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: ${({ theme }) => theme.spaces.xl};
`;

export const StyledTextWrapper = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  max-width: 68%;
  word-wrap: break-word;
  overflow-y: auto;
  /* height: 150px; */
`;

export const StyledTextQuotesWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const StyledQuotes = styled.span<{ location: "bottom" | "top" }>`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  font-style: italic;
  font-weight: bold;
  ${({ location }) => (location === "bottom" ? "align-self: end" : "align-self:start")}
`;
