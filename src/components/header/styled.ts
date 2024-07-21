import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.aquaLight};
  padding: ${({ theme }) => theme.spaces.l};
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    padding: ${({ theme }) => theme.spaces.l} 0;
  }
`;

export const StyledHeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};
  align-items: center;
  width: 80%;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    width: 90%;
  }
`;

export const StyledHeaderTitle = styled.h1`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.texts.black};
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.titleMobile};
  }
`;
export const StyledHeaderSubtitle = styled.h3`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.texts.black};
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.subtitleMobile};
  }
`;

export const StyledHeaderImg = styled.img`
  object-fit: contain;
  height: 300px;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    height: 200px;
  }
`;
