import SubjectForm from "../components/organisms/SubjectForm";
import { useParams } from "react-router-dom";

export default function SubjectFormPage() {
    const { establishmentId, levelId, subjectId } = useParams();
    return <SubjectForm establishmentId={establishmentId} levelId={levelId!} subjectId={subjectId} />;
}