import { Grid, useTheme, Flex } from "@aws-amplify/ui-react";
import { IconType } from "react-icons";
import MapCard from "../molecules/MapCard";
import VerticalMenu from "../molecules/VerticalMenu";
import SocialMediaCard from "../molecules/SocialMediaCard";

const Footer = (
    { pages, socialMediaLinks, location }:
        {
            pages: { title: string, path: string }[],
            socialMediaLinks: { icon: IconType, link: string }[],
            location: string
        },
) => {
    const { tokens } = useTheme();
    return (
        <Grid
            templateColumns="1fr 1fr 1fr"
            templateRows="repeat(3, 6rem) 5rem"
            gap={tokens.space.small}
        >
            <MapCard
                title="Ubicación"
                src={location}
                {...
                {
                    rowStart: "1",
                    rowEnd: "4",
                }
                }
            />
            <VerticalMenu
                pages={pages}
                title="Navegación"
            />
            <SocialMediaCard
                title="Redes Sociales"
                email="correo@gmail.com"
                phone="+593999999999"
                socialMediaLinks={socialMediaLinks}
            />
            <Flex
                columnStart="1"
                columnEnd="-1"
                direction="row"
                alignItems="center"
                justifyContent="center"
                backgroundColor={tokens.colors.background.secondary}
            >
                Copyright © 2025 Semillitas - Todos los derechos reservados.
                Desarrollado por .
            </Flex>
        </Grid>
    )
}

export default Footer;