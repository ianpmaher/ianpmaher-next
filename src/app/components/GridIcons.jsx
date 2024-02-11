import cssIcon from "/assets/css-3.svg";
import htmlIcon from "/assets/html-5.svg";
import jsIcon from "/assets/javascript.svg";
import reactIcon from "/assets/react.svg";
import nextIcon from "/assets/next-js.svg";
import nodeIcon from "/assets/nodejs.svg";
import expressIcon from "/assets/express.svg";
import mongoIcon from "/assets/mongodb.svg";
import postgresIcon from "/assets/postgresql.svg";
import gitIcon from "/assets/git-icon.svg";
import githubIcon from "/assets/github-icon.svg";
import tailwindCssIcon from "/assets/tailwindcss.svg";
import materialUiIcon from "/assets/material-ui.svg";
import pythonIcon from "/assets/python.svg";
import djangoIcon from "/assets/django.svg";
import Image from "next/image";

const cardImages = [
    cssIcon,
    htmlIcon,
    jsIcon,
    reactIcon,
    nextIcon,
    nodeIcon,
    expressIcon,
    mongoIcon,
    postgresIcon,
    gitIcon,
    githubIcon,
    tailwindCssIcon,
    materialUiIcon,
    pythonIcon,
    djangoIcon,

]

const GridIcons = (props) => {
    return (
        <section className=" grid sm:grid-cols-4 md:grid-cols-5 w-full gap-1 list-none place-content-center place-items-center my-0 mx-auto object-cover">
            {cardImages.map((image, index) => {
                return (
                    <li key={index} className="flex flex-col flex-wrap items-center justify-center rounded-2xl shadow-lg p-2 bg-[rgba(255,255,255,0.6)] transition-all duration-300 ease-in-out hover:scale-110 bg-primary-yellow">
                        <Image src={image} alt="icon" width={50} height={50} />
                    </li>
                )
            })}

        </section>
    )

}

export default GridIcons;