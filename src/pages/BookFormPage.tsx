import BookForm from "../components/organisms/BookForm";
import { useParams } from "react-router-dom";

export default function BookFormPage() {
    const { subjectId, bookId } = useParams<{ subjectId: string; bookId?: string }>();
    return <BookForm subjectId={subjectId!} bookId={bookId} />;
}