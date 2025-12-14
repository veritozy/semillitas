import { Outlet } from "react-router-dom";
import {
    Flex,
    Card,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AppBar from "../components/organisms/AppBar"
import Footer from "../components/organisms/Footer";
import LogoSemillitas from '../assets/react.svg';
import {
    SiFacebook as Facebook,
    SiInstagram as Instagram,
    SiLinkedin as Linkedin,
    SiTiktok as Tiktok
} from "react-icons/si";


const Layout = () => {
    const pages = [
        {
            title: "Inicio",
            path: "/",
            submenu: undefined,
            hiddenOnAppBar: false,
        },
        {
            title: "Libros",
            path: "/establecimientos",
            submenu: undefined,
            hiddenOnAppBar: false,
        },
        {
            title: "Sobre Nosotros",
            path: "/nosotros",
            submenu: undefined,
            hiddenOnAppBar: false,
        },
        {
            title: "Perfil",
            path: "/perfil",
            submenu: undefined,
            hiddenOnAppBar: true,
        },
        {
            title: "Política de Privacidad",
            path: "/privacidad",
            submenu: undefined,
            hiddenOnAppBar: true,
        },
    ]

    const socialMediaLinks = [
        {
            icon: Facebook,
            link: "https://www.facebook.com/",
        },
        {
            icon: Instagram,
            link: "https://www.instagram.com/",
        },
        {
            icon: Linkedin,
            link: "https://www.linkedin.com/company/",
        },
        {
            icon: Tiktok,
            link: "https://www.tiktok.com/",
        },
    ];

    return (
        <Flex
            position="relative"
            direction="column"
            alignItems="stretch"
            alignContent="stretch"
            justifyContent="space-around"
            gap="0"
            wrap="wrap"
            width="100%"
        >
            <Card width="100%">
                <AppBar
                    pages={pages.map(pages => ({ ...pages, title: pages.title.toUpperCase() }))}
                    logo={LogoSemillitas}
                />
            </Card>

            <Card padding={0} width="100%">
                <Outlet />
            </Card>

            <Card width="100%">
                <Footer
                    pages={pages}
                    socialMediaLinks={socialMediaLinks}
                    location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1152.4096816226372!2d-78.44969274489733!3d-0.11107214243897398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58f0893bbc35b%3A0x94888e1ff087014b!2sSierra%20hermosa%202%20urbanizaci%C3%B3n!5e0!3m2!1ses-419!2sec!4v1761661497409!5m2!1ses-419!2sec"
                />
            </Card>
        </Flex>
    )
};

export default Layout