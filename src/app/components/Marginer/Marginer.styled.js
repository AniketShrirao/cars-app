import styled from "styled-components";

export const HorizontalMargin = styled.span`
  display: flex;
  min-width: ${({ margin }) =>
        typeof margin === "string" ? margin : `${margin}px`};
`;

export const VerticalMargin = styled.span`
  display: flex;
  min-height: ${({ margin }) =>
        typeof margin === "string" ? margin : `${margin}px`};
`;