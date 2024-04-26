// "use client";

import React from "react";
import Image from "next/image";
import IconCard from "./IconCard";
// import Carousel from "./Carousel";
import StockTicker from "./StockTicker";
const placeholder = "/assets/placeholder.svg";

import JavaScriptLogo from "./svg/JavaScriptLogo";
import PythonLogo from "./svg/PythonLogo";
import CSS from "./svg/CSS";
import TailwindCSS from "./svg/TailwindCSS";
import ReactLogo from "./svg/ReactLogo";
import NextLogo from "./svg/NextLogo";
import NodeLogo from "./svg/NodeLogo";
import Express from "./svg/Express";
import Git from "./svg/Git";
import GitHub from "./svg/GitHub";
import Mongo from "./svg/Mongo";
import PostgreSQL from "./svg/PostgreSQL";
import DjangoLogo from "./svg/DjangoLogo";
import Strapi from "./svg/Strapi";
import Figma from "./svg/Figma";
import Linux from "./svg/Linux";

const styledComponentsIcon = "/assets/styled-components.png";

const GridIcons = (props) => {
    const styledComponents = () => (
        <Image
            src={styledComponentsIcon}
            alt="styled-components"
            title="styled-components"
            // loader={ ({src}) => src }
            width={65}
            height={65}
            // className="hover:transform hover:scale-125 transition-all duration-300 ease-in-out"
            placeholder="blur"
            blurDataURL="data: [image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==]" // 64x64 base64 encoded}
        />
    );

    const cardImages = [
        {
            src: <JavaScriptLogo />,
            alt: "JavaScript",
        },
        {
            src: <PythonLogo />,
            alt: "Python",
        },
        {
            src: <CSS />,
            alt: "CSS",
        },
        {
            src: styledComponents(),
            alt: "styled-components",
        },
        {
            src: <ReactLogo />,
            alt: "React",
        },
        {
            src: <NextLogo />,
            alt: "Next.js",
        },
        {
            src: <NodeLogo />,
            alt: "node.js",
        },
        {
            src: <Express />,
            alt: "Express",
        },
        {
            src: <DjangoLogo />,
            alt: "Django",
        },
        {
            src: <Git />,
            alt: "Git",
        },
        {
            src: <Mongo />,
            alt: "MongoDB",
        },
        {
            src: <PostgreSQL />,
            alt: "PostgreSQL",
        },
        {
            src: <GitHub />,
            alt: "GitHub",
        },
        {
            src: <TailwindCSS />,
            alt: "Tailwind CSS",
        },
        // {
        //     src: materialUiIcon,
        //     alt: "Material UI",
        // },
        {
            src: <Strapi />,
            alt: "Strapi",
        },
        {
            src: <Figma />,
            alt: "Figma",
        },
        {
            src: <Linux />,
            alt: "Linux / Bash ",
        },
    ];

    return (
        // <section className="mx-auto my-0 w-[50vw]">
        // <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:w-[70vw] sm:h-[70%] lg:w-full h-full p-3 list-none place-content-center place-items-center mx-auto my-0 object-cover">
        <section className="mx-auto sm:my-12 py-12 flex items-center">
            {/* {cardImages.map((cardImages) => { */}
            <StockTicker>
                {cardImages.map((cardImages) => (
                    <IconCard
                        variant="secondary"
                        key={cardImages}
                        className=" flex flex-col flex-wrap items-center justify-center"
                        title={cardImages.alt}
                    >
                        <div className="hover:transform active:rotate-45 hover:scale-125 transition-all duration-300 ease-in-out object-contain">
                            {cardImages.src}
                        </div>
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
// hover:transform hover:scale-125 transition-all duration-300 ease-in-out
