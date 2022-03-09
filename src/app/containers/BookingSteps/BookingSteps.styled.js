import styled from "styled-components";
import tw from "twin.macro";

export const BookingContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
  `};
`;

export const BookingTitle = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

export const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `};
`;

export const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:w-96
    items-center
    transition-colors
    hover:text-red-500
    m-3
  `};
`;

export const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
  `};
`;

export const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
    mt-4
  `};
`;

export const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `};
`;

export const StepIcon = styled.span`
  ${tw`
    text-red-500
    text-3xl
  `};
`;