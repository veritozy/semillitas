import Compromisos from "../components/organisms/Compromisos";
import FrasePeg from "../components/organisms/FrasePeg";
import NoticiasPeg from "../components/organisms/NoticiasPeg";
import SectionPe from "../components/organisms/SectionPactoEducativo";
// 1. Definimos los datos de las noticias (puedes cambiarlos cuando quieras)
const noticiasPacto = [
  {
    id: 1,
    categoria: "Educación",
    titulo: "El Papa Francisco: La educación es un acto de esperanza que transforma",
    descripcion: "Un llamado a reconstruir el pacto educativo global, poniendo en el centro a la persona y la escucha de las nuevas generaciones para un futuro de paz.",
    imagen: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1470&q=80",
    link: "https://www.vaticannews.va/es/papa/news/2020-12/papa-la-educacion-es-un-acto-de-esperanza.html"
  },
  {
    id: 2,
    categoria: "Innovación",
    titulo: "Ética en la Inteligencia Artificial: El compromiso del Vaticano",
    descripcion: "La Iglesia lidera el debate sobre la 'Algor-ética', buscando que el desarrollo tecnológico respete los derechos humanos y la dignidad individual.",
    imagen: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1470&q=80",
    link: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20250128_antiqua-et-nova_sp.html"
  },
  {
    id: 3,
    categoria: "Sociedad",
    titulo: "La Economía de Francisco: Un nuevo modelo para los jóvenes",
    descripcion: "Jóvenes economistas de todo el mundo proponen una economía que hace vivir y no mata, que incluye y no excluye, que humaniza y no deshumaniza.",
    imagen: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1470&q=80",
    link: "https://www.vaticannews.va/es/vaticano/news/2020-11/economia-de-francisco-jovenes-economistas-nueva-economia.html"
  },
  {
    id: 4,
    categoria: "Actualidad",
    titulo: "7 claves para entender el nuevo Pacto Educativo Global",
    descripcion: "Un resumen práctico de los compromisos necesarios para humanizar la educación en el siglo XXI, desde el cuidado del medio ambiente hasta la solidaridad.",
    imagen: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1470&q=80",
    link: "https://www.educationglobalcompact.org/resources/Risorse/vademecum-espanol.pdf"
  }
];

export default function PactoEducativoGlobalPage() {
  return (
    <>
     <SectionPe/>
      <div className="bg-white"> 
         <NoticiasPeg noticias={noticiasPacto} />
      </div>
      <Compromisos/>
      <FrasePeg/>
    </>
  );
}