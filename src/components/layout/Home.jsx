import Video from "next-video";
import video01 from "../../../videos/video01.mp4";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <Navbar />
        <Video
          src={video01}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        <div className="absolute inset-0 bg-zinc-900/50 z-20"></div>

        <article className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-9xl text-zinc-100 font-satoshi font-medium">
            TRANSFER NORTE 
          </h1>
          <div className="text-normal text-zinc-400 mt-6">
            {" "}
            Seamless private transport crafted for those who value safety,
            style, and peace of mind
          </div>
        </article>

        <div className="absolute z-20 bottom-28 left-20 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-9 ">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-amber-600 text-white">
              Button1
            </div>
            <div className="bg-black/20 border w-32 h-32 flex items-center justify-center rounded-full border-amber-600 text-zinc-400">
              Button2
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-black/20 items-center border-t w-full h-14 border-zinc-600 text-zinc-400 z-20 absolute bottom-0">
          <div className="w-full border-r border-zinc-600 h-14 flex items-center justify-center">
            LOREM IPSUM
          </div>
          <div className="w-full border-r border-zinc-600 h-14 flex items-center justify-center">
            Lorem
          </div>
          <div className="w-full  h-14 flex items-center justify-center">
            Lorem
          </div>
          <div className="w-full bg-amber-600 h-14 flex items-center justify-center text-zinc-100">
            Contact
          </div>
        </div>
      </section>
    </>
  );
}
