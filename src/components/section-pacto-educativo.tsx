export function SectionPactoEducativo() {
  return (
    <section className="bg-white dark:bg-gray-900 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-green-200">
      {/* Iframe full width */}
      <div className="w-full py-10">
        <iframe
          className="w-full h-64 md:h-[450px] rounded-xl overflow-hidden"
          src="https://player.vimeo.com/video/525707984"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Vimeo video"
        ></iframe>
      </div>

      <div className="max-w-4xl mx-auto text-center text-white px-6 text-lg">
        <p>
         El Pacto Educativo Global , promovido por Su Santidad el Papa Francisco, constituye una iniciativa de alcance mundial orientada a revitalizar el compromiso con la educación como instrumento fundamental para la construcción de una sociedad más justa, solidaria y sostenible. Esta propuesta se fundamenta en la creación de una alianza educativa que involucre a todos los actores de la sociedad, reconociendo que la educación es un proceso integral que trasciende el ámbito escolar y requiere la participación activa de familias, docentes, estudiantes, instituciones académicas, líderes políticos y agentes sociales.
        </p>
      </div>
    </section>
  );
}

export default SectionPactoEducativo;
