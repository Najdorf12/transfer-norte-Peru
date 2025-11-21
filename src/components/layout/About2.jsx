import Image from "next/image";

export default function About2() {
  const phoneNumber = "51913607196";
  const message =
    "Hola, me gustaría obtener más información sobre sus servicios de transfer";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <section className="h-screen relative w-full flex justify-end bg-zinc-800 py-12 px-6 md:px-24 md:py-20 lg:h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mancora/img03.jpg"
            fill
            alt="Beautiful landscape for your journey"
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-zinc-900/50"></div>
        </div>
        <article className="flex flex-col justify-between gap-20 relative text-end max-w-[500px] lg:max-w-[600px] text-balance">
          <h6 className="text-6xl lg:text-8xl 2xl:text-9xl text-stone-200 font-normal">
            Travel in comfort Arrive with confidence *
          </h6>
          <div className="text-lg md:text-2xl text-stone-300">
            Your private journey begins with safety, elegance, and absolute ease
          </div>
        </article>
      </section>

      <section
        id="about"
        className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden"
      >
        <div className=" z-50 w-full p-9 flex justify-center items-center  md:w-1/2 lg:h-full ">
          <img
            src="/images/icon7.svg"
            alt="Beautiful landscape for your journey"
            priority="true"
            className="object-contain"
          />
        </div>
        <article className="z-50 text-balance h-full flex flex-col justify-center gap-12 px-6 md:gap-20 relative md:h-full lg:w-1/2   ">
          <h2 className="text-3xl md:text-4xl  text-zinc-500 max-w-[600px] ">
            With us, travel becomes
            <span className="text-amber-500">
              {" "}
              smooth, secure, and genuinely enjoyable{" "}
            </span>{" "}
            *
          </h2>
          <p className="max-w-[600px] text-zinc-400 text-sm md:text-base ">
            Every detail of our service reflects our promise: to deliver safety,
            discretion, and complete professionalism. Our chauffeurs are
            carefully selected for their expertise and courtesy, our fleet
            combines elegance with advanced safety features, and our operations
            are guided by integrity.
          </p>
        </article>
      </section>

      <section className="relative h-screen w-full flex justify-center items-center bg-zinc-800 overflow-hidden xl:bg-red-500">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mancora/img14.jpg"
            fill
            alt="Beautiful landscape for your journey"
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <article className="flex flex-col w-full justify-center items-center text-center relative z-10 px-2 gap-14 md:gap-16">
          <h6 className="text-5xl md:text-8xl text-zinc-200 font-medium max-w-[900px]">
            Ready to redefine the way you travel?
          </h6>
          <p className="text-sm max-w-[600px] text-zinc-300 text-balance  ">
            Experience a higher standard of private transport — one where
            comfort, reliability, and personal service come together to elevate
            every moment of your journey.
          </p>
          <button className=" border-2 px-9 md:px-14 py-0.5 border-amber-600 rounded-2xl text-stone-200 bg-black/20 font-medium">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Contact 
            </a>
          </button>
        </article>
      </section>
    </>
  );
}
