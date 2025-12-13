// src/components/molecules/ButtonGroup.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button } from "@aws-amplify/ui-react";
import { ButtonData } from "../../types/types";

interface ButtonGroupProps {
    buttons: ButtonData[];
    direction?: "row" | "column";
    buttonWidth?: string;
    size?: "small" | "large";
    justifyContent?: string;
    alignItems?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = (
    { buttons, direction = "row", buttonWidth = "auto", size, justifyContent = "space-evenly", ...props }) => {
    const navigate = useNavigate();

    return (
        <Flex direction={direction} justifyContent={justifyContent} alignItems={props.alignItems} wrap="wrap">
            {buttons.map(({ href, text, onClick }, i) => (
                <Button
                    key={i}
                    width={buttonWidth}
                    {...(i === 0 ? { variation: "primary", className: "first-button" } : {})}
                    onClick={href ? () => navigate(href) : onClick }
                    {...(size ? { size: size } : {})}
                >
                    {text}
                </Button>
            ))}
        </Flex>
    );
};

export default ButtonGroup;
