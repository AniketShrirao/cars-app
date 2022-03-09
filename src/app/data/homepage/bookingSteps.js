import {
    faCalendarAlt,
    faCarSide,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

export const bookingSteps = [
    {
        id: 1,
        title: 'Choose Location',
        description: 'Find the nearest Yourcar point and book your car.',
        icon: faMapMarkedAlt
    },
    {
        id: 2,
        title: 'Pick-Up Date',
        description: 'Pickup the Best Date to rent a car for you.',
        icon: faCalendarAlt
    },
    {
        id: 3,
        title: 'Book Your Car',
        description: 'Book your nice car with ease in one single click',
        icon: faCarSide
    },
];