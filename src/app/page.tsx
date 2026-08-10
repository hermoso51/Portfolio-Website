import Navbar from "@/components/layout/navbar";
import Hero from "@/sections/hero";
import SelectedWork from "@/sections/selectedwork";



export default function Home() {
  return (
    <div className="w-screen bg-[#09090B] flex flex-col flex-1">
      <Navbar />
      <main className="flex flex-1 w-screen max-w-3xl">
        <Hero />
      </main>
    </div>  
  );  
}
