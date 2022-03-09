import React from 'react';
import BookCards from '../../components/BookCards';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Marginer from '../../components/Marginer';
import Navbar from '../../components/Navbar';
import { AboutUs } from '../AboutUs';
import BookingSteps from '../BookingSteps';
import TopCars from '../TopCars';
import { PageContainer } from './Homepage.styled';

type Props = {}

const HomePage = (props: Props) => {
    return (
        <PageContainer>
            <Navbar />
            <Hero />
            <Marginer direction="vertical" margin="4em" />
            <BookCards />
            <Marginer direction="vertical" margin="10em" />
            <BookingSteps />
            <Marginer direction="vertical" margin="8em" />
            <AboutUs />
            <Marginer direction="vertical" margin="8em" />
            <TopCars />
            <Footer />
        </PageContainer>
    )
}

export default HomePage;