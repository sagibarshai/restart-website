import styled from "styled-components";

export const StyledWhyChooseUsWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.l};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  text-align: center;
`;
export const StyledWhyChooseUsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};
  align-items: center;
  width: 80%;
`;

export const StyledWhyChooseUsTitle = styled.h1`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.texts.black};
  font-size: ${({ theme }) => theme.fonts.sizes.title};
`;
export const StyledWhyChooseUsText = styled.h3`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.texts.black};
  font-size: ${({ theme }) => theme.fonts.sizes.text};
`;

export const StyledInfoCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces.xl};
`;
