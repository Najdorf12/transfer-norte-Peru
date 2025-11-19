import Image from "next/image";

export default function About2() {
  return (
    <>
      <section className="h-[90vh] lg:h-screen relative w-full flex justify-end bg-zinc-800 px-24 py-20">
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
        <article className="flex flex-col justify-between gap-20 relative text-end max-w-[600px] text-balance">
          <h6 className="text-8xl text-stone-200 font-normal">
            Travel in comfort Arrive with confidence *
          </h6>
          <div className="text-2xl text-stone-300">
            Your private journey begins with safety, elegance, and absolute ease
          </div>
        </article>
      </section>

      <section
        id="about"
        className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden justify-center items-center"
      >
        <div className="w-full md:w-1/2 flex justify-center items-center bg-zinc-800 lg:h-full p-9">
          <img
            src="/images/icon7.svg"
            alt="Beautiful landscape for your journey"
            priority="true"
            className="object-contain"
          />
        </div>
        <article className="text-balance flex flex-col justify-center gap-20 relative lg:w-1/2 h-full bg-amber-500  pl-12">
          <h2 className="text-4xl text-zinc-100 max-w-[600px] ">
            With us, travel becomes 
            <span className="text-stone-600"> smooth, secure, and
            genuinely enjoyable </span> *
          </h2>
          <p className="max-w-[600px] text-stone-700  ">
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <article className="flex flex-col w-full justify-center items-center text-center relative z-10 gap-16">
          <h6 className="text-8xl text-stone-200 font-medium max-w-[900px]">
            Ready to redefine the way you travel?
          </h6>
          <p className="max-w-[600px] text-stone-300 text-balance leading-relaxed ">
            Experience a higher standard of private transport — one where
            comfort, reliability, and personal service come together to elevate
            every moment of your journey.
          </p>
          <button className=" border-2 px-16 py-1 border-amber-600 rounded-2xl text-stone-200 bg-black/20 ">
            Contact us
          </button>
        </article>
      </section>
    </>
  );
}
