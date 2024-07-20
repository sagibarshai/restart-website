import styled from "styled-components";

export const StyledInfoCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.aquaDark};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.l};
  padding: ${({ theme }) => theme.spaces.xl};
  align-items: center;
  border-radius: 12px;
`;

export const StyledInfoCardIcon = styled.img`
  object-fit: contain;
`;
export const StyledInfoCardTitle = styled.h4`
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  text-decoration: underline;
`;
export const StyledInfoCardContent = styled.p`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.text};
`;
