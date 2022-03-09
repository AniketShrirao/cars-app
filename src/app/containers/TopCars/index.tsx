import React, { useEffect, useState } from "react";
import { ICar } from "../../../typings/cars";
import { Car } from "../../components/Car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { CarsContainer, EmptyCars, LoadingContainer, TopCarsContainer, TopCarsTitle } from "./TopCars.styled";
import MoonLoader from "react-spinners/MoonLoader";

const TopCars = () => {
    const [current, setCurrent] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const [topCars, setTopCars] = useState<ICar[]>([]);

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    useEffect(() => {
        const testCar: ICar = {
            name: "Audi S3 Car",
            mileage: "10k",
            thumbnailSrc:
                "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
            dailyPrice: 70,
            monthlyPrice: 1600,
            gearType: "Auto",
            gas: "Petrol",
        };

        const testCar2: ICar = {
            name: "HONDA cITY 5 Seater Car",
            mileage: "20k",
            thumbnailSrc:
                "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
            dailyPrice: 50,
            monthlyPrice: 1500,
            gearType: "Auto",
            gas: "Petrol",
        };

        const testCar3: ICar = {
            name: "HONDA cITY 5 Seater Car",
            mileage: "20k",
            thumbnailSrc:
                "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
            dailyPrice: 50,
            monthlyPrice: 1500,
            gearType: "Auto",
            gas: "Petrol",
        };

        const testCar4: ICar = {
            name: "HONDA cITY 5 Seater Car",
            mileage: "20k",
            thumbnailSrc:
                "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
            dailyPrice: 50,
            monthlyPrice: 1500,
            gearType: "Auto",
            gas: "Petrol",
        };

        const fetchTopCars = async () => {
            setLoading(true);
            setTopCars([testCar, testCar2, testCar3, testCar, testCar4]);
            setLoading(false);
        };
        fetchTopCars();
    }, []);

    const isEmptyTopCars = !topCars || topCars.length === 0;

    const cars =
        (!isEmptyTopCars &&
            topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailSrc} />)) ||
        [];

    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    return (
        <TopCarsContainer>
            <TopCarsTitle>Explore Our Top Deals</TopCarsTitle>
            {isLoading && (
                <LoadingContainer>
                    <MoonLoader loading size={20} />
                </LoadingContainer>
            )}
            {isEmptyTopCars && !isLoading && <EmptyCars>No Cars To Show!</EmptyCars>}
            {!isEmptyTopCars && !isLoading && (
                <CarsContainer>
                    <Carousel
                        value={current}
                        onChange={setCurrent}
                        slides={cars}
                        plugins={[
                            "clickToChange",
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 3,
                                },
                            },
                        ]}
                        breakpoints={{
                            640: {
                                plugins: [
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 1,
                                        },
                                    },
                                ],
                            },
                            900: {
                                plugins: [
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 2,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                    <Dots value={current} onChange={setCurrent} number={numberOfDots} />
                </CarsContainer>
            )}
        </TopCarsContainer>
    );
}

export default TopCars;