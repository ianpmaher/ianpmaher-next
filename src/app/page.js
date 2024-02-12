import Image from "next/image";
import Button from "./components/Button";
import IconCard from "./components/IconCard";
import GridIcons from "./components/GridIcons";
import Projects from "./components/Projects";


export default function Home() {
    return (
        <main className="">
            <section className= "mx-auto my-0">
                <GridIcons />
                <Projects />
            </section>
            
        </main>
    );
}
