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
import CursorColorChanger from "./shared/CursorColorChanger";
import LazyParent from "./components/LazyParent";
// import PieChartComponent from "./components/PieChart";
import LazyParentChart from "./components/LazyParentChart";

export default function Home() {
  return (
    <main className="cursor-default" id="top">
      <div className="z-[1] justify-center hidden sm:block">
        <NewNavMenu className="fixed sm:top-auto sm:left-4 left-0 top-1" />
      </div>
      <section className="mx-auto my-0 min-h-screen flex flex-col items-center justify-center">
        <Landing />
      </section>
      <section className="mx-auto my-0 ">
        <About />
      </section>
      {/* react marquee component inside of LazyParent */}
      <section className="mx-auto my-0 kitten">
        <LazyParentChart />
      </section>
      <section className="mx-auto my-0 kitten">
        <LazyParent />
      </section>
      {/* PieChart */}
      <section className="mx-auto my-0 min-h-screen">
        <Projects />
      </section>
      
      <div className="">
        <ScrollDiv className=" " />
      </div>
    </main>
  );
}
