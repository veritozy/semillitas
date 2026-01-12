import { useEffect, useState } from 'react';
import {
    Flex,
    Card,
    useTheme,
    Heading
} from '@aws-amplify/ui-react';
import { getUrl } from 'aws-amplify/storage';
import { BookAudio } from '../../types/types';

const AudioCard = ({ audio } : { audio: BookAudio }) => {
    const { tokens } = useTheme();
    const [audioUrl, setAudioUrl] = useState<string>("");

    useEffect(() => {
        const getAudioUrl = async () => {
            const storageObject = await getUrl({
                path: audio.url!,
            });
            setAudioUrl(storageObject.url.href);
        }
        getAudioUrl();
    }, [audio.url]);

    return (
        <Card
            borderRadius="medium"
            borderColor={tokens.colors.border.primary}
            borderWidth="thin"
            maxWidth="40rem"
            padding="large"
            backgroundColor={tokens.colors.background.primary}
        >
            <Flex direction="row" alignContent="center" alignItems="center">
                <Heading level={3}>{audio.name}</Heading>
                <audio controls src={audioUrl} />
            </Flex>
        </Card>
    );
}

export default AudioCard;