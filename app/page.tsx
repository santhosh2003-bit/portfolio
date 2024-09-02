import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 h-[850px]">
        <Hero />
        <div className="md:mb-20 ">
          <Skills />
        </div>
        <div className="w-full h-auto md:pb-20">
          {" "}
          <Encryption />
        </div>

        <Projects />
        <Footer />
      </div>
    </main>
  );
}
