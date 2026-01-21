import { Book, Establishment, Level, Subject, ElementType, BookAudio } from "../../types/types.ts";
import { Flex, Text, Collection, Heading } from '@aws-amplify/ui-react';
import GeneralCard from "../organisms/GeneralCard.tsx";
import AudioCard from "../organisms/AudioCard.tsx";

const GeneralCollection = (
    { elements, elementType, isSearchable = false, isPaginated = false }:
        { elements: (Establishment | Level | Subject | Book | BookAudio)[], elementType: ElementType, isSearchable?: boolean, isPaginated?: boolean }) => {
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
                        buttons={[
                            {
                                href: elementType === 'libros' ? `/libro/${element.id}` : `/${elementType}/${element.id}`,
                                text: `Ir al ${elementType.slice(0, -1)}`,
                            },
                            {
                                href: elementType === 'libros' ? `/recursos/${element.id}` : undefined,
                                text: 'Ver recursos'
                            },
                            {
                                href: elementType === 'establecimientos' ? `/libros/${element.id}` : undefined,
                                text: 'Ver todos los libros'
                            },
                        ]}
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