import {
    Flex,
    Card,
    useTheme
} from '@aws-amplify/ui-react';
import ButtonGroup from '../molecules/ButtonGroup';
import { ButtonData } from '../../types/types';

const GeneralCard = (
    { children, buttons}:
        { 
            children?: React.ReactNode, 
            buttons?: ButtonData[]}) => {
    const { tokens } = useTheme();

    return (
        <Card
            borderRadius="medium"
            borderColor={tokens.colors.border.primary}
            borderWidth="thin"
            maxWidth="20rem"
            // gap="2rem"
            padding="large"
            backgroundColor={tokens.colors.background.primary}
        >
            <Flex direction="column" alignContent="center" alignItems="center">
                {children}
                {/* <Image
                    src={book.imageUrl!}
                    alt={book.title}
                    borderRadius="medium"
                /> */}
                {/* <Text>{book.description}</Text> */}
                <ButtonGroup
                    direction="column"
                    buttons={buttons!}
                />
            </Flex>
        </Card>
    );
}

// ProgramCard.propTypes = {
//     program: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         discount: PropTypes.number.isRequired,
//         shortDescription: PropTypes.string.isRequired,
//     }).isRequired,
// }


export default GeneralCard;