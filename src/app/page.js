import Image from "next/image";
import Button from "./components/Button";
import IconCard from "./components/IconCard";
import GridIcons from "./components/GridIcons";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Landing from "./components/Landing";
import ScrollDiv from "./components/ScrollDiv";
import NewNavMenu from "./shared/NewNavMenu";

export default function Home() {
  return (
    <main className="" id="top">
      <div className="relative">
        <NewNavMenu className="absolute" />
      </div>
      <section className="mx-auto my-0 min-h-screen flex flex-col items-center justify-center">
        <Landing />
      </section>
      <section className="mx-auto my-0 ">
        <About />
      </section>
      <section className="mx-auto my-0">
        <GridIcons />
      </section>
      <section className="mx-auto my-0">
        <Projects />
      </section>
      <section className="mx-auto my-0">
        <Resume />
      </section>
      <div className="">
        <ScrollDiv className=" " />
      </div>
    </main>
  );
}
