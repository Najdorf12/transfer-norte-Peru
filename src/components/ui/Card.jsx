export default function Card({ card }) {
  const { title, text } = card;
  return (
    <div className="text-balance w-54 h-80 border border-zinc-500 z-50 relative rounded-3xl p-4 flex flex-col justify-between hover:bg-amber-500 duration-300 group hover:scale-105 first-of-type:bg-stone-700">
      <div className="text-6xl text-amber-600 group-hover:text-white duration-300">
        *
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-stone-500 text-lg group-hover:text-white">
          {title}
        </div>
        <div className="border-t text-sm pt-2 pr-6 text-stone-400 group-hover:text-zinc-700">
          {text}
        </div>
      </div>
    </div>
  );
}
