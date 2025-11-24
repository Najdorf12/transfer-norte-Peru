import Card from "../ui/Card";
import Form from "../ui/Form";

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
    <section
      id="contact"
      className="relative h-screen bg-zinc-800 overflow-hidden flex flex-col gap-6 md:items-center md:justify-center lg:flex-row "
    >
      <article className="pt-12 relative z-50 flex flex-col self-start lg:gap-9 lg:w-1/2 px-6 lg:pl-14 2xl:pl-16">
        <h6 className="text-6xl md:text-8xl xl:text-9xl 2xl:text-[9rem] text-zinc-200 font-medium">
          GET IN TOUCH
        </h6>
        <p className="hidden text-sm z-50 text-zinc-500  max-w-[400px] pl-3 md:flex md:text-base 2xl:text-lg">
          Contact our team today for a personalized quote or to arrange your
          next effortless journey.
        </p>
      </article>

      <div className="flex items-center justify-center absolute right-0 w-full h-full md:w-1/2 ">
        <img
          src="/images/icon6.svg"
          alt="Beautiful landscape for your journey"
          priority="true"
          className="object-contain rounded-lg max-w-[700px] "
          style={{
            filter: "drop-shadow(0 0 0 transparent)",
            stroke: "none",
          }}
        />
      </div>
      <div className="relative w-full px-3 mt-2 lg:h-screen flex justify-center items-center lg:w-1/2">
        <Form />
      </div>

      <div className="w-1/2 absolute left-1 bottom-2 px-3 text-zinc-500 text-sm md:text-base md:left-12 md:bottom-6 lg:left-14 2xl:left-16">
        <ul className="text-stone-500 flex flex-col gap-2 ">
          <li className="flex gap-2">
            Phone: <span className="text-amber-500"> 51913607196</span>
          </li>
          <li className="flex gap-2">
            Email:{" "}
            <span className="text-amber-500"> transfernorteperu@gmail.com</span>
          </li>
        </ul>
        <div className="w-full h-px bg-stone-700 mt-4 flex md:mt-16 max-w-[600px]"></div>
        <legend className="mt-1 text-stone-700 text-nowrap md:text-wrap">
          Trusted by travelers worldwide
        </legend>
      </div>
    </section>
  );
}
