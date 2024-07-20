import styled from "styled-components";

export const StyledWhatWeCleanWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.l};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  text-align: center;
`;
export const StyledWhatWeCleanContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};
  justify-content: center;
  width: 80%;
  align-items: center;
`;

export const StyledWhatWeCleanTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
`;
export const StyledWhatWeCleanIconsTextRow = styled.div`
  padding: ${({ theme }) => theme.spaces.xl} 0;
  border-radius: 16px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.aquaLight};
`;
