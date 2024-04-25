// "use client";

import React from "react";
import Image from "next/image";
import IconCard from "./IconCard";
// import Carousel from "./Carousel";
import StockTicker from "./StockTicker";
const placeholder = "/assets/placeholder.svg";

// import { CSS, JavaScriptLogo, ReactLogo, NodeLogo, Express, Mongo, TailwindCSS, NextLogo, PythonLogo, Linux, Git, GitHub, PostgresQLLogo, Strapi, DjangoLogo, Figma } from "./svg";
import JavaScriptLogo from "./svg/JavaScriptLogo";


const styledComponentsIcon = "/assets/styled-components.png";

const GridIcons = (props) => {
    const cardImages = [
        {
            src: <JavaScriptLogo />,
            alt: "JavaScript",
        },
        // {
        //     src: cssIcon,
        //     alt: "CSS",
        // },
        // {
        //     src: reactIcon,
        //     alt: "React",
        // },
        // {
        //     src: "https://f005.backblazeb2.com/file/ianpmaher/next.svg",
        //     alt: "Next.js",
        // },
        // {
        //     src: "https://f005.backblazeb2.com/file/ianpmaher/node.svg",
        //     alt: "node.js",
        // },
        // {
        //     src: "https://f005.backblazeb2.com/file/ianpmaher/express.svg",
        //     alt: "Express",
        // },
        // {
        //     src: "https://f005.backblazeb2.com/file/ianpmaher/mongodb.svg",
        //     alt: "MongoDB",
        // },
        // {
        //     src: "https://f005.backblazeb2.com/file/ianpmaher/postgresql.svg",
        //     alt: "PostgreSQL",
        // },
        // {
        //     src: gitIcon,
        //     alt: "Git",
        // },
        // {
        //     src: githubIcon,
        //     alt: "GitHub",
        // },
        // {
        //     src: tailwindCssIcon,
        //     alt: "Tailwind CSS",
        // },
        // {
        //     src: materialUiIcon,
        //     alt: "Material UI",
        // },
        // {
        //     src: pythonIcon,
        //     alt: "Python",
        // },
        // {
        //     src: djangoIcon,
        //     alt: "Django",
        // },
        // {
        //     src: figmaIcon,
        //     alt: "Figma",
        // },
        // {
        //     src: strapiIcon,
        //     alt: "Strapi",
        // },
        {
            
            src: styledComponentsIcon,
            alt: "styled-components",
        },
        // {
        //     src: linuxIcon,
        //     alt: "Linux / Bash ",
        // },
    ];

    return (
        // <section className="mx-auto my-0 w-[50vw]">
        // <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:w-[70vw] sm:h-[70%] lg:w-full h-full p-3 list-none place-content-center place-items-center mx-auto my-0 object-cover">
        <section className="mx-auto my-0 py-10 flex items-center ">
            {/* {cardImages.map((cardImages) => { */}
            <StockTicker>
                {cardImages.map((cardImages) => (
                    <IconCard
                        variant="secondary"
                        key={cardImages}
                        className=" flex flex-col flex-wrap items-center justify-center"
                        title={cardImages.alt}
                    >
                        {cardImages.src}
                    </IconCard>
                ))}
            </StockTicker>
            <span className="sr-only">
                Icons: React, JavaScript, CSS, Tailwind, Next.JS, Express, Python, Django, PostgreSQL, MongoDB, Material
                UI, Git, Github, Strapi.js, Figma, TypeScript, Node.js, styled-components, Linux
            </span>
        </section>
    );
};

export default GridIcons;
