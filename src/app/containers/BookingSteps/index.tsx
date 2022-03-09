import React from "react";
import { BookingContainer, BookingTitle, StepsContainer } from "./BookingSteps.styled";
import BookingStep from "./BookingStep";
import { bookingSteps } from "../../data/homepage/bookingSteps";

const BookingSteps = () => {
    return (
        <BookingContainer>
            <BookingTitle>Our Working Steps</BookingTitle>
            <StepsContainer>
                {
                    bookingSteps.map((bookingStep) => (
                        <BookingStep
                            key={bookingStep.id}
                            title={bookingStep.title}
                            description={bookingStep.description}
                            icon={bookingStep.icon}
                        />
                    ))
                }
            </StepsContainer>
        </BookingContainer>
    );
}

export default BookingSteps;