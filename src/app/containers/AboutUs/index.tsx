import React from "react";
import JeepImg from "../../../assets/images/jeep.png";
import { AboutTitle, AboutUsContainer, CarContainer, InfoContainer, InfoText } from "./AboutUs.styled";

export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt='jeep' />
            </CarContainer>
            <InfoContainer>
                <AboutTitle>Feel The Best Experience With Our Rental Deals</AboutTitle>
                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    );
}
