import { Flex } from '@aws-amplify/ui-react';
import ButtonCard from '../components/molecules/ButtonCard';


const NoPage = () => {
    return (
        <Flex className="flex-principal">
            <ButtonCard
                title="Lo sentimos. No hemos encontrado la página"
                text="La página que estás buscando no existe o ha sido movida."
                button={{ href: "/", text: "Ir al inicio" }}
            />
        </Flex>
    )
}

export default NoPage;