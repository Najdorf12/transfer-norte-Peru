export default function Card({ card }) {
  const { title, text } = card;
  return (
    <div className="text-balance w-46 h-[280px] border border-zinc-500 z-50 relative rounded-3xl p-4 flex flex-col justify-between hover:bg-amber-500 duration-300 group hover:scale-105 first-of-type:bg-stone-700 md:w-56 md:h-[330px] ">
      <div className="text-6xl text-amber-600 group-hover:text-white duration-300">
        *
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-stone-500 md:text-lg group-hover:text-white">
          {title}
        </div>
        <div className="border-t min-h-9 text-sm pt-2 text-stone-400 group-hover:text-zinc-700">
          {text}
        </div>
      </div>
    </div>
  );
}
