import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Step, StepContainer, StepDescription, StepIcon, StepTitle } from './BookingSteps.styled';

type Props = {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const BookingStep = ({ icon, title, description }: Props) => {
    return (
        <StepContainer>
            <Step>
                <StepIcon>
                    <FontAwesomeIcon icon={icon} />
                </StepIcon>
            </Step>
            <StepTitle>{title}e</StepTitle>
            <StepDescription>
                {description}
            </StepDescription>
        </StepContainer>
    )
}

export default BookingStep;