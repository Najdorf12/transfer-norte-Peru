export default function Card({ card, index }) {
  const { title, text } = card;

  const isFirst = index === 0;
  const isLast = index === 3; // o cardsContent.length - 1 si querés dinámico

  return (
    <div
      className={`text-balance w-46 h-[300px] border border-zinc-500 z-50 relative 
      rounded-3xl p-4 flex flex-col justify-between duration-300 group 
      hover:scale-105 md:w-56 md:h-[330px]
      ${isFirst ? "bg-stone-700" : ""}
      ${isLast ? "bg-amber-500" : ""}
    `}
    >
      <div  className={`
           text-amber-600 text-6xl group-hover:rotate-x-180 duration-300
            ${isLast ? "text-stone-100" : ""}
          `} >
        *
      </div>

      <div className="flex flex-col gap-4">
        
        {/* TITLE */}
        <div
          className={`
            md:text-lg 
            ${isFirst ? "text-stone-100" : ""}
            ${isLast ? "text-stone-100" : "text-stone-500"}
          `}
        >
          {title}
        </div>

        {/* TEXT */}
        <div
          className={`
            border-t  min-h-9 text-sm pt-2
            ${isFirst ? "text-stone-300" : ""}
            ${isLast ? "text-zinc-600" : "text-stone-400"}
          `}
        >
          {text}
        </div>

      </div>
    </div>
  );
}
