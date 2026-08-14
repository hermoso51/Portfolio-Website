import Navbar from "@/components/layout/navbar";
import Hero from "@/sections/hero";
import SelectedWork from "@/sections/selectedwork";
import TechStack from "@/sections/techstack";
import HowIbuild from "@/sections/how_i_build";
import About from "@/sections/about";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#09090B] flex flex-col">
      <Navbar />
      <main className="flex flex-col flex-1 w-full">
        <Hero />
        <SelectedWork />
        <TechStack />
        <HowIbuild />
        <About />
      </main>
    </div>  
  );  
}
