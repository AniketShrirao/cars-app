import React, { useState } from "react";
import {
    faCalendarAlt,
    faCaretDown,
    faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
import Marginer from "../Marginer";
import { CardContainer, DateCalendar, IconContainer, ItemContainer, LineSeperator, LabelName, SmallIconContainer } from "./BookCards.styled";

const BookCards = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen);
        if (isReturnCalendarOpen) setReturnCalendarOpen(false);
    };

    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if (isStartCalendarOpen) setStartCalendarOpen(false);
    };

    return (
        <CardContainer>
            <ItemContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </IconContainer>
                <LabelName onClick={toggleStartDateCalendar}>Pick Up Date</LabelName>
                <SmallIconContainer>
                    <FontAwesomeIcon
                        icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
                    />
                </SmallIconContainer>
                {isStartCalendarOpen && (
                    <DateCalendar value={startDate} onChange={setStartDate as any} />
                )}
            </ItemContainer>
            <LineSeperator />
            <ItemContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </IconContainer>
                <LabelName onClick={toggleReturnDateCalendar}>Return Date</LabelName>
                <SmallIconContainer>
                    <FontAwesomeIcon
                        icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
                    />
                </SmallIconContainer>
                {isReturnCalendarOpen && (
                    <DateCalendar
                        offset
                        value={returnDate}
                        onChange={setReturnDate as any}
                    />
                )}
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em" />
            <Button>Book Your Ride</Button>
        </CardContainer>
    );
}

export default BookCards;