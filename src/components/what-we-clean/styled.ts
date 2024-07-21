import styled from "styled-components";

export const StyledWhatWeCleanWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.l};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  text-align: center;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    padding: 0;
  }
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
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.titleMobile};
  }
`;
export const StyledWhatWeCleanIconsTextRow = styled.div`
  padding: ${({ theme }) => theme.spaces.xl} 0;
  border-radius: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: ${({ theme }) => theme.spaces.xl};
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    grid-template-columns: 1fr;
  }
`;
