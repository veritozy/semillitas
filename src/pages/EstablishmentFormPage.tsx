import EstablishmentForm from "../components/organisms/EstablishmentForm";
import { useParams } from "react-router-dom";

const EstablishmentFormPage = () => {
    const { establishmentId } = useParams();
    return <EstablishmentForm establishmentId={establishmentId} />;
};

export default EstablishmentFormPage;