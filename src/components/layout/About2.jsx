import Image from "next/image";

export default function About2() {
  return (
    <>
      <section className="h-screen relative w-full flex justify-end bg-zinc-800 px-24 py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img2.jpg"
            fill
            alt="Beautiful landscape for your journey"
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-zinc-900/50"></div>
        </div>
        <article className="flex flex-col justify-between gap-20 relative text-end max-w-[600px] text-balance">
          <h6 className="text-8xl text-zinc-100 font-normal">
            Travel in comfort * Arrive with confidence *
          </h6>
          <div className="text-2xl text-zinc-300">
            You’ve done enough to prove yourself
          </div>
        </article>
      </section>

      <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden justify-center items-center">
        <div className="w-full md:w-1/2 flex justify-center items-center bg-zinc-800 lg:h-full p-9">
          <img
            src="/images/icon7.svg"
            alt="Beautiful landscape for your journey"
            priority
            className="object-contain"
           
          />
        </div>
        <article className="text-balance flex flex-col justify-center gap-20 relative lg:w-1/2 h-full bg-amber-500  pl-12">
         
          <h2 className="text-4xl text-zinc-100 max-w-[600px] ">
            Discover your destination in style with a  <span className="text-zinc-600">dedicated *</span> chauffeur and tailored itineraries 
          </h2>
          <p className="max-w-[600px] text-zinc-200  ">
            Creemos que el trayecto no es un mal necesario, sino el prólogo de
            tus mejores recuerdos. Que una parada inesperada para ver el
            atardecer puede ser el momento más memorable de un viaje. Que la
            comodidad no es un lujo, sino un derecho del viajero. Nacimos en
            Máncora, donde el desierto besa al mar. Aprendimos que cada curva de
            esta carretera esconde una historia, y cada viajero busca la suya
            propia.
          </p>
        </article>
      </section>

      <section className="relative h-screen w-full flex justify-center items-center bg-zinc-800 overflow-hidden xl:bg-red-500">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img1.jpg"
            fill
            alt="Beautiful landscape for your journey"
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <article className="flex flex-col w-full justify-center items-center text-center relative z-10 gap-16">
          <h6 className="text-8xl text-zinc-100 font-medium max-w-[900px]">
            Ready to redefine the way you travel?
          </h6>
          <p className="max-w-[600px] text-zinc-400 text-balance leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            provident eveniet nihil a voluptatibus non pariatur deleniti nobis
            distinctio ea
          </p>
          <button className=" border-2 px-16 py-1 border-amber-600 rounded-2xl text-zinc-100 bg-black/20 ">
            Button3
          </button>
        </article>
      </section>
    </>
  );
}
