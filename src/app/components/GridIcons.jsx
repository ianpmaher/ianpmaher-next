"use client";

import React from "react";
import Image from "next/image";
import IconCard from "./IconCard";
import Carousel from "./Carousel";
import StockTicker from "./StockTicker";
const placeholder = "/assets/placeholder.svg";
const cssIcon = "/assets/css-3.svg";
const jsIcon = "/assets/javascript.svg";
const reactIcon = "/assets/react.svg";
const nextIcon = "/assets/next.svg";
const nodeIcon = "/assets/nodejs.svg";
const expressIcon = "/assets/express.svg";
const mongoIcon = "/assets/mongodb.svg";
const postgresIcon = "/assets/postgresql.svg";
const gitIcon = "/assets/git-icon.svg";
const githubIcon = "/assets/github-icon.svg";
const tailwindCssIcon = "/assets/tailwindcss.svg";
const materialUiIcon = "/assets/material-ui.svg";
const pythonIcon = "/assets/python.svg";
const djangoIcon = "/assets/django.svg";
const figmaIcon = "/assets/figma.svg";
const strapiIcon = "/assets/strapi.svg";
const pythonNew = "/assets/python-new.svg";
const styledComponentsIcon = "/assets/styled-components.png";

const GridIcons = (props) => {
    const cardImages = [
        {
            src: jsIcon,
            alt: "JavaScript",
        },
        {
            src: cssIcon,
            alt: "CSS",
        },
        {
            src: reactIcon,
            alt: "React",
        },
        {
            src: nextIcon,
            alt: "Next.js",
        },
        {
            src: nodeIcon,
            alt: "Node",
        },
        {
            src: expressIcon,
            alt: "Express",
        },
        {
            src: mongoIcon,
            alt: "MongoDB",
        },
        {
            src: postgresIcon,
            alt: "PostgreSQL",
        },
        {
            src: gitIcon,
            alt: "Git",
        },
        {
            src: githubIcon,
            alt: "GitHub",
        },
        {
            src: tailwindCssIcon,
            alt: "Tailwind CSS",
        },
        {
            src: materialUiIcon,
            alt: "Material UI",
        },
        {
            src: pythonIcon,
            alt: "Python",
        },
        {
            src: djangoIcon,
            alt: "Django",
        },
        {
            src: figmaIcon,
            alt: "Figma",
        },
        {
            src: strapiIcon,
            alt: "Strapi",
        },
        {
            src: styledComponentsIcon,
            alt: "styled-components",
        },
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
                        <Image
                            src={cardImages.src}
                            alt={cardImages.alt}
                            title={cardImages.alt}
                            width={75}
                            height={75}
                            className="hover:transform hover:scale-125 transition-all duration-300 ease-in-out"
                            placeholder="blur"
                            blurDataURL="data: [image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==]" // 64x64 base64 encoded}
                        />
                    </IconCard>
                ))}
            </StockTicker>
            <span className="sr-only">
                Icons: React, JavaScript, CSS, Tailwind, Next.JS, Express, Python, Django, PostgreSQL, MongoDB, Material
                UI, Git, Github, Strapi.js, Figma, TypeScript
            </span>
        </section>
    );
};

export default GridIcons;
