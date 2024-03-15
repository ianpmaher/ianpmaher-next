import Image from "next/image";
import Button from "./components/Button";
import IconCard from "./components/IconCard";
import GridIcons from "./components/GridIcons";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Landing from "./components/Landing";


export default function Home() {
    return (
        <main className="" id="top">
            <section className= "mx-auto my-0 ">
                <Landing />
                <About />
                <GridIcons />
                <Projects />
                <Resume />
            </section>
            
        </main>
    );
}
