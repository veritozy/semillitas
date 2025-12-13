import { useNavigate } from "react-router-dom";
import {
    Card,
    Flex,
    Heading,
    Text,
    Button,
    Divider,
} from '@aws-amplify/ui-react';
import { ButtonData } from "../../types/types";

const ButtonCard = (
    { title, text, button, fontSize = "1em", transparent = false }:
        { title: string, text: string, button: ButtonData, fontSize?: string, transparent?: boolean }) => {
    const navigate = useNavigate();

    return (
        <Card 
            padding="large" 
            borderRadius="large"
            {...(transparent ? { backgroundColor: "transparent" } : {})}
            >
            <Flex
                direction="column"
                alignContent="center"
                justifyContent="center"
                alignItems="center"
                wrap="wrap"
                gap="2rem"
            >
                <Heading level={2} >{title}</Heading>
                <Divider orientation="horizontal" width="60%"  />
                <Text as="p" fontSize={fontSize} fontWeight="normal" textAlign="center" >
                    {text}
                </Text>
                <Button
                    variation="primary"
                    onClick={() => navigate(button.href!)}
                    size="large"
                >
                    {button.text}
                </Button>
            </Flex>
        </Card>
    )
}

export default ButtonCard;