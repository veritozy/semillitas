import BookForm from "../components/organisms/BookForm";
import { useParams } from "react-router-dom";

export default function BookFormPage() {
    const { establishmentId, levelId, subjectId, bookId } = useParams();
    return <BookForm establishmentId={establishmentId} levelId={levelId} subjectId={subjectId!} bookId={bookId} />;
}