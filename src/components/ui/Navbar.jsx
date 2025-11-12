export default function Navbar() {
  return (
    <nav className="w-full text-sm absolute top-0 font-satoshi flex justify-between items-center text-zinc-300 z-50 px-9 py-3 ">
      <div className="flex flex-col gap-2 w-[330px]">
        <ul className="flex items-center justify-center gap-12 border-b border-zinc-500 pb-3 ">
          <li>Service</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-6 justify-center pb-3 items-center border-b border-zinc-500 text-amber-600 font-medium">
            <button>Button 1</button>
            <button>Button 2</button>
        </div>
        <p className="text-zinc-400">Book Your Journey</p>
      </div>
       <div className="text-xl font-semibold text-zinc-300">PERÚ</div> 
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-col gap-3 border-b border-zinc-500 pb-3 w-[300px] ">
          <p className="">Contact our team today</p>
          <div className="flex items-center gap-12 text-amber-600 font-medium">
            +64 562346563{" "}
            <button className="border-b text-zinc-300">More gilada</button>
          </div>
        </div>
        <p className="text-zinc-400">Máncora - Perú</p>
      </div>
    </nav>
  );
}
