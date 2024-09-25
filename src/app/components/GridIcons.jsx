"use client";
import { useState } from "react";
import Image from "next/image";
import IconCard from "./IconCard";
// import Carousel from "./Carousel";
// import StockTicker from "./StockTicker";

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
import dynamic from "next/dynamic";

// components/GridIcons.jsx

const placeholder = "/assets/placeholder.svg";
const styledComponentsIcon = "/assets/styled-components.png";

// Dynamically import StockTicker with no SSR
const StockTicker = dynamic(() => import("./StockTicker"), {
  ssr: false,
  loading: () => <p>Loading Stock Ticker...</p>,
});

const GridIcons = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const styledComponents = () => (
    <Image
      src={styledComponentsIcon}
      alt="styled-components"
      title="styled-components"
      width={65}
      height={65}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==" // Corrected MIME type
    />
  );

  const cardImages = [
    { src: <JavaScriptLogo />, alt: "JavaScript" },
    { src: <PythonLogo />, alt: "Python" },
    { src: <CSS />, alt: "CSS" },
    { src: styledComponents(), alt: "styled-components" },
    { src: <ReactLogo />, alt: "React" },
    { src: <NextLogo />, alt: "Next.js" },
    { src: <NodeLogo />, alt: "node.js" },
    { src: <Express />, alt: "Express" },
    { src: <DjangoLogo />, alt: "Django" },
    { src: <Git />, alt: "Git" },
    { src: <Mongo />, alt: "MongoDB" },
    { src: <PostgreSQL />, alt: "PostgreSQL" },
    { src: <GitHub />, alt: "GitHub" },
    { src: <TailwindCSS />, alt: "Tailwind CSS" },
    { src: <Strapi />, alt: "Strapi" },
    { src: <Figma />, alt: "Figma" },
    { src: <Linux />, alt: "Linux / Bash" },
  ];

  return (
    <section className="mx-auto sm:my-12 py-12 flex items-center">
      <StockTicker>
        {cardImages.map((card) => (
          <IconCard
            variant="secondary"
            key={card.alt} // Use a unique key
            className="flex flex-col flex-wrap items-center justify-center"
            title={card.alt}
          >
            <div className="hover:transform active:rotate-45 hover:scale-125 transition-all duration-300 ease-in-out object-contain">
              {card.src}
            </div>
          </IconCard>
        ))}
      </StockTicker>
      <span className="sr-only">
        Icons: React, JavaScript, CSS, Tailwind, Next.JS, Express, Python, Django, PostgreSQL, MongoDB, Git, Github, Strapi.js, Figma, Node.js, styled-components, Linux
      </span>
    </section>
  );
};

export default GridIcons;
