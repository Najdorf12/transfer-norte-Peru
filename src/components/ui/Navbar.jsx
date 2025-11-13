export default function Navbar() {
  return (
    <nav className="w-full text-sm absolute top-0 font-satoshi flex justify-between text-stone-300 z-50 px-9 pt-4">
      <div className="flex flex-col gap-2 w-[310px]">
        <ul className="flex items-center justify-center gap-12 border-b border-stone-400 pb-3 ">
          <li>About Us</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-6 justify-center pb-3 items-center border-b border-stone-400 text-amber-600 font-semibold">
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
        <p className="text-stone-400">Book Your Journey</p>
      </div>
     {/*  <div className="text-xl font-semibold text-zinc-200">PERÚ</div> */}

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 border-b border-stone-400 pb-3 w-[290px] ">
          <p className="">Contact our team today</p>
          <div className="flex items-center gap-12 text-amber-600 font-semibold ">
            +64 562346563{" "}
            <button className="border-b text-stone-300 font-normal">More gilada</button>
          </div>
        </div>
        <p className="text-stone-400">Máncora - Perú</p>
      </div>
    </nav>
  );
}
