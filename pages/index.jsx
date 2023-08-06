import Front from "@/sources/components/Front";
import About from "@/sources/components/About";
import Experience from "@/sources/components/Experience";
import Skills from "@/sources/components/Skills";
import Projects from "@/sources/components/Projects";
import Connect from "@/sources/components/Connect";
import Footer from "@/sources/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Front />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Connect />

        <Footer />
      </main>
    </>
  );
}
