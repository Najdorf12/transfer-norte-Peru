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
      className="relative h-screen bg-zinc-800  overflow-hidden flex items-center justify-center  lg:flex-row"
    >
      <article className="relative z-50 flex flex-col self-start gap-9 lg:w-1/2 py-12 px-12">
        <h6 className="text-9xl text-zinc-200 font-medium">GET IN TOUCH</h6>
       <p className=" z-50 text-zinc-500  max-w-[400px] pl-3">
        Contact our team today for a personalized quote or to arrange your next
        effortless journey.
      </p>
      <ul className="text-stone-500 flex flex-col gap-2 mt-12 pl-3">
        <li className="flex gap-2">Phone: <span className="text-amber-500"> 51913607196</span></li>
        <li className="flex gap-2">Email: <span className="text-amber-500"> transfernorteperu@gmail.com</span></li>
      </ul>
      </article> 

      <div className="flex items-center justify-center absolute right-0 w-1/2 ">

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
      <div className="relative w-full h-screen flex justify-center items-center lg:w-1/2">
        <Form />
      </div>

      <div className="w-1/2 h-0.5 absolute left-12 bottom-12 bg-amber-600 text-zinc-500 ">
      <legend className="mt-2">Trusted by travelers worldwide</legend>
      </div>
    </section>
  );
}
