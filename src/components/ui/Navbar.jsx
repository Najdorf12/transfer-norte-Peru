import Link from "next/link";

export default function Navbar() {
  const phoneNumber = "51913607196";
  const message =
    "Hola, me gustaría obtener más información sobre sus servicios de transfer";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <nav className="w-full text-sm absolute top-0 font-satoshi flex justify-between text-stone-200 z-50 px-9 pt-4">
      <div className="flex flex-col gap-2 w-[310px]">
        <ul className="flex items-center justify-center gap-12 border-b border-stone-500 pb-3 ">
          <li>
            <Link
              href="#about"
              className="hover:text-amber-600 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="hover:text-amber-600 transition-colors"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-amber-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex gap-6 justify-center pb-3 items-center border-b border-stone-500 text-amber-600 font-semibold">
          <Link href="#faq">FAQ</Link>
          <Link href="#faq">Pricing</Link>
        </div>
        <p className="text-stone-400">Book Your Journey</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 border-b border-stone-500 pb-3 w-[290px] ">
          <p className="">Contact our team today</p>
          <div className="flex items-center gap-12 text-amber-600 font-semibold ">
            +51 913 607 196{" "}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b text-stone-400 font-normal hover:text-amber-600 transition-colors cursor-pointer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <p className="text-stone-400">Máncora - Perú</p>
      </div>
    </nav>
  );
}
