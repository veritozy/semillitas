interface ArticleCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ArticleCard({ img, title, desc }: ArticleCardProps) {
  return (
    <div className="group h-[400px] w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {}
        <div className="absolute inset-0">
          <img
            src={img}
            alt={title}
            className="h-full w-full rounded-2xl object-cover"
          />
          {}
          <div className="absolute inset-0 flex items-end justify-center bg-black/40 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white text-center leading-tight">
              {title}
            </h3>
          </div>
        </div>

        {}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 p-8 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center gap-4">
            <h3 className="text-xl font-bold border-b border-white/20 pb-2">
              {title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed font-medium">
              {desc}
            </p>
            {}
            <div className="mt-4 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
              {}
              <a
                href="#contacto"
                className="mt-4 px-6 py-2 bg-white text-[#09667e] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors"
              >
                Solicitar Información
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
