import styled from "styled-components";

export const StyledIconTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  font-weight: bolder;
`;
