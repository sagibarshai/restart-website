import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.aquaLight};
  padding: ${({ theme }) => theme.spaces.l};
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const StyledHeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};
  align-items: center;
  width: 80%;
`;

export const StyledHeaderTitle = styled.h1`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.texts.black};
  font-size: ${({ theme }) => theme.fonts.sizes.title};
`;
export const StyledHeaderSubtitle = styled.h3`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.texts.black};
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
`;

export const StyledHeaderImg = styled.img`
  object-fit: contain;
  height: 300px;
`;
