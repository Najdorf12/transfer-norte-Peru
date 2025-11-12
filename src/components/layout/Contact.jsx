import Card from "../ui/Card";

const cardsContent = [
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet",
  },
];

export default function Contact() {
  return (
    <section className="relative w-full h-screen text-balance bg-zinc-800  px-20 overflow-hidden">
      <div>
        <article className="relative z-50 flex flex-col gap-20 py-12">
          <h6 className="text-9xl text-zinc-200">GET IN TOUCH</h6>
        </article>
        <p className="relative z-50 text-zinc-100 mt-9 max-w-[400px] border-b border-amber-500 pb-3">
          Contact our team today for a personalized quote or to arrange your
          next effortless journey.
        </p>
      </div>
    
    <div className="w-full mt-20 z-50 relative flex justify-start items-center gap-20">
      {cardsContent.map((card,i)=>(
        <Card card={card} key={i}/>
      ))}
    </div> 
      
      
      
    {/*   <div className=" absolute flex justify-start inset-0 items-center w-full z-30  ">
        <img
          src="/images/icon4.svg"
          alt="Beautiful landscape for your journey"
          priority
          className="object-contain w-full h-full max-w-[700px] z-40"
          style={{
            filter: "drop-shadow(0 0 0 transparent)",
          }}
        />
      </div> */}
      <div className=" absolute flex justify-end inset-0 items-center w-full z-30  ">
        <img
          src="/images/icon4.svg"
          alt="Beautiful landscape for your journey"
          priority
          className="object-contain w-full h-full max-w-[700px] z-40"
          style={{
            filter: "drop-shadow(0 0 0 transparent)",
          }}
        />
      </div>
    </section>
  );
}
