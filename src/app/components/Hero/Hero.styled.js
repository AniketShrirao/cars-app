import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../responsive';

export const HeroContainer = styled.div`
    ${tw`
        w-full
        max-w-screen-2xl
        min-h[400px]
        mt-[6em]
        flex
        flex-row
        justify-between
        lg:px-12
        px-3
    `}
`;

export const LeftTextContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
`;

export const RightImageContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

export const SloganHeading = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`;

export const DescriptionText = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800

    `}
`;

export const BlobContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index:-1;
    transform: rotate(-30deg);

    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }

    @media (min-width: ${SCREENS.lg}) {
        width: 50em;
        max-height: 30em;
        right: -7em;
        top: -15em;
        transform: rotate(-30deg);
    }

    @media (min-width: ${SCREENS.xs}) {
        width: 70em;
        max-height: 30em;
        right: -15em;
        top: -25em;
        transform: rotate(-20deg);
    }
`;

export const CarContainer = styled.div`
    width: auto;
    height: 10em;
    position: absolute;
    right: -6em;
    top: -5em;

    img{
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        height: 16em;
        right: -6em;
        top: -6em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 21em;
        right: -8em;
        top: -5em;
    }

    @media (min-width: ${SCREENS.xs}) {
        height: 30em;
        right: -13em;
        top: -9em;
    }
`
export const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;