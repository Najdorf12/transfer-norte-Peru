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
      className="relative w-full h-screen text-balance bg-zinc-800 flex flex-col items-end gap-12  px-20 overflow-hidden"
    >
      <div>
        <article className="relative z-50 flex flex-col py-12">
          <h6 className="text-8xl text-zinc-200">GET IN TOUCH</h6>
        </article>
        <p className="relative z-50 text-zinc-100  max-w-[400px] border-b border-amber-500  pb-3">
          Contact our team today for a personalized quote or to arrange your
          next effortless journey.
        </p>
      </div>

      <div className="w-1/2 flex justify-center items-center ">
        <div className="flex items-center justify-center absolute inset-0 z-50  w-1/2">
          <Form />
        </div>

        <div className=" absolute inset-0 flex justify-center  items-center z-30 w-1/2  ">
          <img
            src="/images/icon6.svg"
            alt="Beautiful landscape for your journey"
            priority="true"
            className="object-contain w-full h-full max-w-[800px] z-40"
            style={{
              filter: "drop-shadow(0 0 0 transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
