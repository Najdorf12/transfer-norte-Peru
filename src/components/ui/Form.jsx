export default function Form() {
  return (
    <>
      <div class="border border-stone-600 shadow max-w-[420px] lg:py-12 p-8 rounded-md bg-zinc-800/80">
        <div class="flex justify-between text-sm text-stone-300">
          <div class="flex items-center gap-2">
            <div class="text-4xl text-amber-500">*</div>
            <p class="font-bold pb-0.5">Transfer Norte</p>
          </div>
         
        </div>

        <div class="mt-10 text-stone-300">
          <h1 class="text-2xl font-semibold">
            Manage your produce business with us!
          </h1>
        </div>

        <p class="text-sm mt-4 text-stone-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, ea?
        </p>

        <div class="mt-6 text-stone-100">
          <input
            placeholder="Email"
            type="text"
            class="p-2 px-3 border-b-0.5 focus:border-stone-200 w-full outline-none border-b border-stone-500 transition duration-300"
          />
          <input
            placeholder="Password"
            type="password"
            class="p-2 px-3 mt-3 border-b-0.5 focus:border-stone-200 w-full outline-none border-b border-stone-500 transition duration-300"
          />
        </div>

        

        <button
          type="submit"
          class="bg-stone-600 text-white text-sm h-10 w-[130px] rounded-md font-semibold mt-5 shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </>
  );
}
