import AudioForm from '../components/organisms/AudioForm.tsx';
import { useParams } from "react-router-dom";

export default function AudioFormPage() {
    const { bookId, audioId } = useParams();
    return <AudioForm bookId={bookId!} audioId={audioId} />;
}