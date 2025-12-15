
interface ArticleCardProps {
  img: string;
  imgBack: string;
  title: string;
  desc: string;
}

export function ArticleCard({ img, imgBack, title, desc }: ArticleCardProps) {
  return (
    <div className="group relative h-[30rem] w-full [perspective:1000px] rounded-xl">
      {/* CONTENEDOR INTERNO QUE GIRA */}
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden">
          <img src={img} alt="front" className="object-cover w-full h-full rounded-xl" />
          <div className="absolute inset-0 bg-black/60 rounded-xl" />
          <div className="absolute bottom-0 z-10 text-white p-4">
            <h4 className="text-xl font-bold">{title}</h4>
            <p className="mt-2 text-sm">{desc}</p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl overflow-hidden">
          <img src={imgBack} alt="back" className="object-cover w-full h-full rounded-xl" />
          <div className="absolute inset-0 bg-black/50 rounded-xl" />
        </div>

      </div>
    </div>
  );
}

export default ArticleCard;
