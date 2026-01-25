// import { Grid, useTheme, Flex } from "@aws-amplify/ui-react";
// import { IconType } from "react-icons";
// import MapCard from "../molecules/MapCard";
// import VerticalMenu from "../molecules/VerticalMenu";
// import SocialMediaCard from "../molecules/SocialMediaCard";

// const Footer = (
//     { pages, socialMediaLinks, location }:
//         {
//             pages: { title: string, path: string }[],
//             socialMediaLinks: { icon: IconType, link: string }[],
//             location: string
//         },
// ) => {
//     const { tokens } = useTheme();
//     return (
//         <Grid
//             templateColumns="1fr 1fr 1fr"
//             templateRows="repeat(3, 6rem) 5rem"
//             gap={tokens.space.small}
//         >
//             <MapCard
//                 title="Ubicación"
//                 src={location}
//                 {...
//                 {
//                     rowStart: "1",
//                     rowEnd: "4",
//                 }
//                 }
//             />
//             <VerticalMenu
//                 pages={pages}
//                 title="Navegación"
//             />
//             <SocialMediaCard
//                 title="Redes Sociales"
//                 email="correo@gmail.com"
//                 phone="+593999999999"
//                 socialMediaLinks={socialMediaLinks}
//             />
//             <Flex
//                 columnStart="1"
//                 columnEnd="-1"
//                 direction="row"
//                 alignItems="center"
//                 justifyContent="center"
//                 backgroundColor={tokens.colors.background.secondary}
//             >
//                 Copyright © 2025 Semillitas - Todos los derechos reservados.
//                 Desarrollado por .
//             </Flex>
//         </Grid>
//     )
// }

// export default Footer;

export default function Footer() {
    return (
        <footer className="pb-5 pt-10">
            <div className="container mx-auto flex flex-col items-center">
                {/* Tarjeta azul */}
                <div className="w-full max-w-6xl bg-gradient-to-br from-[#09667e] via-blue-700 to-cyan-600 shadow-sm p-8 flex flex-col items-center gap-4">
                    <h2 className="text-2xl italic font-bold text-center text-gray-50">
                        CEP'S - Educando con el idioma del amor
                    </h2>
                    <p className="text-center text-white">
                        Dirección: Quito-Ecuador
                        <br />
                        Email: semillitas.cip.2020@gmail.com
                        <br />
                        Teléfono: 0998691883
                    </p>

                    { }
                    <div className="mt-6 flex flex-col md:flex-row gap-4 w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full md:flex-1 px-4 py-2 rounded-md text-white/80 focus:outline-none"
                        />
                        <button
                            className="
                                    w-full md:w-auto          
                                    px-8 py-3                 
                                    rounded-md
                                    font-medium
                                    text-white
                                    bg-emerald-400
                                    shadow-lg
                                   hover:bg-indigo-700
                                    transition-all duration-300
                                    transform hover:scale-105
                                "
                        >
                            Suscribirse
                        </button>
                    </div>
                </div>

               {/* Sección Identidad y Redes Sociales CENTRADA */}
<div className="flex flex-col items-center justify-center w-full max-w-6xl mt-8">
    
    {/* Texto de Identidad CENTRADO */}
    <a
        href="#"
        className="text-[#09667e] font-bold text-xl mb-6 no-underline text-center hover:text-cyan-500 transition-colors"
    >
        Semillitas - Centro Psicopedagógico
    </a>

    {/* Redes Sociales con Colores de Marca */}
                <div className="flex gap-10 justify-center">
                    <a href="https://www.facebook.com/CEPS2023" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                        <i className="fa-brands fa-facebook-f text-2xl text-[#1877F2]"></i>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                        <i className="fa-brands fa-instagram text-2xl text-[#E4405F]"></i>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                        <i className="fa-brands fa-youtube text-2xl text-[#FF0000]"></i>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                        <i className="fa-brands fa-whatsapp text-2xl text-[#25D366]"></i>
                    </a>
                </div>
            </div>

            {}
            <p className="text-center mt-12 text-gray-400 text-sm tracking-wide">
                &copy; {new Date().getFullYear()} <span className="font-semibold">Semillitas - Centro Psicopedagógico</span>. 
                <br className="md:hidden" /> Todos los derechos reservados.
            </p>
        </div>
    </footer>
  );
}