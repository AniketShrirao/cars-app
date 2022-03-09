import React from 'react';
import { ButtonsContainer, BlobContainer, CarContainer, DescriptionText, HeroContainer, LeftTextContainer, RightImageContainer, SloganHeading } from './Hero.styled';
import McLarenCar from '../../../assets/images/mclaren-orange-big.png';
import Blob from '../../../assets/images/blob.svg';
import Button from '../Button';

type Props = {}

const Hero = (props: Props) => {
    return (
        <HeroContainer>
            <LeftTextContainer>
                <SloganHeading>Rent the best quality car's with us</SloganHeading>
                <DescriptionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error iure doloremque eaque. Ad ipsam ex rem similique, autem in optio explicabo architecto officia ipsa, fuga repudiandae, repellendus blanditiis iure? </DescriptionText>
                <ButtonsContainer>
                    <Button>Book Your Ride</Button>
                    <Button theme="filled">Sell Your Car</Button>
                </ButtonsContainer>
            </LeftTextContainer>
            <RightImageContainer>
                <BlobContainer>
                    <img src={Blob} alt='blob' />
                </BlobContainer>
                <CarContainer>
                    <img src={McLarenCar} alt='car' />
                </CarContainer>
            </RightImageContainer>
        </HeroContainer>
    )
}

export default Hero;