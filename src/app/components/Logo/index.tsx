import React from 'react';
import CarLogoImg from '../../../assets/images/car-logo.png';
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";
import { ImageContainer, LogoContainer, LogoText } from './Logo.styled';

type Props = {
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
}

const Logo = ({ color, bgColor }: Props) => {
    return (
        <LogoContainer>
            <ImageContainer>
                <img src={bgColor === "dark" ? CarLogoDarkImg : CarLogoImg} alt='Logo' />
            </ImageContainer>
            <LogoText color={color || "dark"} >your car</LogoText>
        </LogoContainer>
    )
}

export default Logo;