import Card from "../ui/Card";

const cardsContent = [
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet",
  },
];

export default function Contact() {
  return (
    <section className="relative w-full h-screen text-balance bg-zinc-800  px-20 overflow-hidden">
      <div>
        <article className="flex flex-col gap-20 py-12">
          <h6 className="text-9xl text-zinc-200">GET IN TOUCH</h6>
        </article>
        <p className="text-zinc-600 mt-9 max-w-[400px] border-b border-amber-500 pb-3">
          Contact our team today for a personalized quote or to arrange your
          next effortless journey.
        </p>
      </div>
    
{/*     <div className="w-full h-32 bg-zinc-300 z-10 relative">

    </div> */}
      
      
      
      <div className=" absolute flex justify-end inset-0 items-center w-full z-50  ">
        {/*  <p className="text-6xl text-end text-balance max-w-[600px] text-zinc-700">
          YOUR TRAVEL START HERE
        </p> */}
        <img
          src="/images/icon5.svg"
          alt="Beautiful landscape for your journey"
          priority
          className="object-contain w-full h-full max-w-[700px] z-50"
          style={{
            filter: "drop-shadow(0 0 0 transparent)",
            stroke: "none",
          }}
        />
      </div>
    </section>
  );
}
