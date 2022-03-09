import React from "react";
import { HorizontalMargin, VerticalMargin } from "./Marginer.styled";

type Props = {
    margin: number | string;
    direction?: "horizontal" | "vertical";
}

const Marginer = ({ direction, margin }: Props) => {
    if (direction === "horizontal") return <HorizontalMargin direction={direction} margin={margin} />;
    else {
        return <VerticalMargin direction={direction} margin={margin} />;
    }
}

Marginer.defaultProps = {
    direction: "horizontal",
};

export default Marginer;
