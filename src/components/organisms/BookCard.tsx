import {
    Flex,
    Card,
    Heading,
    useTheme
} from '@aws-amplify/ui-react';
import { Book } from "../../types/types";
import ButtonGroup from '../molecules/ButtonGroup';
import { ButtonData } from '../../types/types';

const BookCard = (
    { book, buttons}:
        { book: Book, buttons?: ButtonData[]}) => {
    const { tokens } = useTheme();

    return (
        <Card
            borderRadius="medium"
            maxWidth="20rem"
            // gap="2rem"
            padding="large"
            backgroundColor={tokens.colors.background.secondary}
        >
            <Flex direction="column" alignContent="center" alignItems="center">
                <Heading level={3}>{book.title}</Heading>
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


export default BookCard;