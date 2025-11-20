export default function Form() {
  return (
    <>
      <div className="relative border border-stone-600 shadow max-w-[420px] lg:py-12 p-8 rounded-md bg-zinc-800/80  text-balance">
        <div className="flex justify-between text-sm text-stone-300">
          <div className="flex items-center gap-2">
            <p className="text-base pb-0.5">Transfer Norte</p>
            <div className="text-4xl text-amber-500">*</div>
          </div>
        </div>

        <div className="mt-10 text-stone-300">
          <h1 className="text-2xl font-semibold ">
            Fill out the form and our team will respond shortly.
          </h1>
        </div>

        <p className="text-sm mt-4 text-stone-500">
          Let us take care of the details.
        </p>

        <div className="mt-6 text-stone-100 ">
          <input
            placeholder="Email"
            type="text"
            className="p-2 px-3 border-b-0.5 focus:border-amber-600 w-full outline-none border-b border-stone-500 transition duration-300 placeholder:text-stone-400"
          />
          <textarea
            placeholder="Message"
            className="p-2 px-3 h-11 mt-3 border-b-0.5 placeholder:text-stone-400 focus:border-amber-600 w-full outline-none border-b border-stone-500 transition duration-300"
          />
        </div>

        <button
          type="submit"
          className="bg-amber-600 text-stone-100 font-semibold text-sm h-10 w-[130px] rounded-md mt-6 shadow-md hover:bg-zinc-200 hover:text-amber-500 transition duration-300 hover:scale-105"
        >
          Send
        </button>
      </div>
    </>
  );
}
