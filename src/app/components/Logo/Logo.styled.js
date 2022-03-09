import styled from 'styled-components';
import tw from 'twin.macro';

export const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

export const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `}
      ${({ color }) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

export const ImageContainer = styled.div`
    width: auto;
    ${tw` h-6 md:h-9`}

    img {
        width: auto;
        height: 100%;
    }
`