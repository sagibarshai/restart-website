import styled from "styled-components";

export const StyledContactUsWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spaces.l};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.aquaDark};
`;

export const StyledContactUsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.l};
  width: 80%;
  align-items: center;
`;

export const StyleContactUsTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.title};
`;

export const StyledContactUsPersonalPhone = styled.a`
  all: unset;
  font-weight: 300;
`;

export const StyledContactUsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xl};
`;
