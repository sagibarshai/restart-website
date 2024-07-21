import styled from "styled-components";

export const StyledIconTextWrapper = styled.div`
  display: grid;
  /* flex-direction: column; */
  grid-template-rows: 4fr 1fr;
  gap: ${({ theme }) => theme.spaces.m};
  justify-content: center;
  align-items: center;
`;

export const StyledIcon = styled.img`
  object-fit: contain;
  width: 80px;
  height: 80px;
`;

export const StyledText = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  font-weight: bolder;
  text-decoration: underline;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.subtitleMobile};
  }
`;
