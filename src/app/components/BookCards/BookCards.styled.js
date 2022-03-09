import styled, { css } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../responsive";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `};
`;

export const ItemContainer = styled.div`
  ${tw`flex relative`};
`;

export const IconContainer = styled.span`
  ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

export const SmallIconContainer = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

export const LabelName = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
  `};
`;

export const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`;

export const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;

  ${({ offset }) =>
    offset &&
    css`
      left: -6em;
    `};

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;