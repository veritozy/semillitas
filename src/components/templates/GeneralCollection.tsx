import { Book, Establishment, Level, Subject, ElementType, BookAudio, ButtonData } from "../../types/types.ts";
import { Flex, Text, Collection, Heading } from '@aws-amplify/ui-react';
import GeneralCard from "../organisms/GeneralCard.tsx";
import AudioCard from "../organisms/AudioCard.tsx";

const GeneralCollection = (
    { elements, elementType, buttons, isSearchable = false, isPaginated = false }:
        { elements: (Establishment | Level | Subject | Book | BookAudio)[], elementType: ElementType, buttons?: ButtonData[], isSearchable?: boolean, isPaginated?: boolean }) => {
    return (
        <Collection
            items={elements}
            type="list"
            direction="row"
            gap="20px"
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            margin="large"
            {...(isSearchable ? { isSearchable, searchPlaceholder: `Buscar ${elementType}` } : {})}
            {...(isPaginated ? { isPaginated, itemsPerPage: 10 } : {})}
            searchNoResultsFound={
                <Flex justifyContent="center">
                    <Text> No se han encontrado {elementType} </Text>
                </Flex>
            }
        >
            {element =>
                elementType !== 'audios' ?
                    <GeneralCard
                        key={element.id}
                        buttons={
                            buttons?.map(button => ({
                                href: button.href ? `${button.href}/${element.id}` : undefined,
                                text: button.text,
                                onClick: () => button.onClick?.(element.id)
                            }))
                        }
                    >
                        <Heading as="h3" fontWeight="bold" fontSize="1.2em" textAlign="center">
                            {
                                elementType === 'establecimientos' ? (element as Establishment).description :
                                    elementType === 'niveles' ? (element as Level).name :
                                        elementType === 'asignaturas' ? (element as Subject).name :
                                            elementType === 'libros' ? (element as Book).title : ''
                            }
                        </Heading>
                    </GeneralCard>
                    :
                    <AudioCard
                        key={element.id}
                        audio={element as BookAudio}
                    />
            }
        </Collection>
    );
}

export default GeneralCollection;