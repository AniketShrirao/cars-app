import React from "react";
import { FilledButton, OutlinedButton } from "./Button.styled";

type Props = {
    theme?: "filled" | "outlined";
    styleClass?: string;
    children: React.ReactNode;
}

const Button = ({ children, theme, styleClass }: Props) => {
    if (theme === "filled")
        return <FilledButton className={styleClass}>{children}</FilledButton>
    else return <OutlinedButton className={styleClass}>{children}</OutlinedButton>;
}

export default Button;