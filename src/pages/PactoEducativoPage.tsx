import Compromisos from "../components/organisms/Compromisos";
import FrasePeg from "../components/organisms/FrasePeg";
import NoticiasPeg from "../components/organisms/NoticiasPeg";
import SectionPe from "../components/organisms/SectionPactoEducativo";
// 1. Definimos los datos de las noticias (puedes cambiarlos cuando quieras)
const noticiasPacto = [
  {
    id: 1,
    categoria: "Vaticano",
    titulo: "El Papa Francisco promueve el Pacto Educativo Global",
    descripcion: "En un mensaje histórico, Su Santidad invita a las instituciones educativas a unir esfuerzos para crear un futuro basado en la solidaridad, la paz y el cuidado de nuestra casa común mediante una educación con alma.",
    imagen: "https://cdn.pixabay.com/photo/2020/04/21/19/30/rome-5074421_1280.jpg",
    autor: "Vatican News",
    autorImg: "https://media.istockphoto.com/id/173546052/photo/man-in-popes-garment-holding-holy-bible.jpg?s=2048x2048&w=is&k=20&c=7iz1G1mxEQSKHZ-paQkH7agydjZo39LbcQ3rZIZGSkY=",
    fecha: "07 Enero, 2026",
    link: "https://www.vatican.va/content/francesco/es/messages/pont-messages/2019/documents/papa-francesco_20190912_messaggio-patto-educativo.html"
  },
  {
    id: 2,
    categoria: "Actualidad",
    titulo: "Aunque disimules, tú también quieres milagros",
    imagen: "https://www.matermundi.tv/wp-content/uploads/2025/12/Navidad-ACdP-3-e1765963202949.jpg",
    link: "https://www.matermundi.tv/navidad-acdp-aunque-disimules-tu-tambien-quieres-milagros/",
    fecha: "05 Enero, 2026"
  },
  {
    id: 3,
    categoria: "Eventos",
    titulo: "‘Theotokos’, un álbum visual para ensalzar a María en Adviento y Navidad",
    imagen: "https://www.matermundi.tv/wp-content/uploads/2025/12/theotokos-ivan-perez-musica-catolica-e1766174216712.jpg",
    link: "https://www.matermundi.tv/theotokos-musica-y-videos-para-adviento-y-navidad/",
    fecha: "03 Enero, 2026"
  },
  {
    id: 4,
    categoria: "Actualidad",
    titulo: "Congreso Internacional de Educadores Católicos en Quito",
    imagen: "https://www.matermundi.tv/wp-content/uploads/2025/12/pexels-cottonbro-10484665-scaled-e1765798822306.jpg",
    link: "https://www.matermundi.tv/la-pastoral-del-duelo-impulsa-los-grupos-virtuales-de-mutua-ayuda-resurreccion/",
    fecha: "03 Enero, 2026"
  }
];

export default function PactoEducativoGlobalPage() {
  return (
    <>
     <SectionPe/>
     {}
      <div className="bg-white"> 
         <NoticiasPeg noticias={noticiasPacto} />
      </div>
      <Compromisos/>
      <FrasePeg/>
    </>
  );
}