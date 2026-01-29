import LevelForm from "../components/organisms/LevelForm";
import { useParams } from "react-router-dom";

export default function LevelFormPage() {
    const { establishmentId, levelId } = useParams();
    return <LevelForm establishmentId={establishmentId!} levelId={levelId} />;
}