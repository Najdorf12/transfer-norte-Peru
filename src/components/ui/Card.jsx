export default function Card({ card }) {
  const { title, text } = card;
  return (
    <div className="text-balance w-52 h-70 border border-zinc-500 bg-stone-700 z-50 relative rounded-3xl p-3 flex flex-col justify-between hover:bg-amber-500 duration-300 group hover:scale-105 ">
      <div className="text-5xl text-amber-600 group-hover:text-white duration-300">*</div>
      <div className="flex flex-col gap-4">
        <div className="text-zinc-200 text-lg ">{title}</div>
        <div className="border-t text-sm pt-2 pr-6 text-stone-400 group-hover:text-zinc-700">{text}</div>
      </div>
    </div>
  );
}
