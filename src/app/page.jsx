import Home from "@/components/layout/Home";
import About from "@/components/layout/About";
import About2 from "@/components/layout/About2";
import Service from "@/components/layout/Service";
import Pricing from "@/components/layout/Pricing";
import Contact from "@/components/layout/Contact";

export default function App() {
  return (
    <main className="overflow-hidden">
      <Home />
      <About />
      <About2 />
      <Service />
     {/*  <Pricing />  */}
      <Contact />
    </main>
  );
}
