"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import IconCard from "./IconCard";
import dynamic from "next/dynamic";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadStockTicker, setLoadStockTicker] = useState(false);
  const stockTickerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to load StockTicker component when it is in view
    const observer = new IntersectionObserver(
      // callback function to run when the observer is triggered
      (entries) => {
        // if the first entry is intersecting (in view) set loadStockTicker to true
        if (entries[0].isIntersecting) {
          setLoadStockTicker(true);
          // disconnect the observer
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    // if the stockTickerRef is available, observe it
    if (stockTickerRef.current) {
      // observe the stockTickerRef
      observer.observe(stockTickerRef.current);
    }

    return () => {
      // if the stockTickerRef is available, unobserve it
      if (stockTickerRef.current) {
        // unobserve the stockTickerRef
        observer.unobserve(stockTickerRef.current);
      }
    };
  }, []);

  const StockTicker = loadStockTicker
    ? dynamic(() => import("./StockTicker"), {
        ssr: false,
        loading: () => <p>Loading...</p>,
      })
    : () => <p>Loading...</p>;

  const styledComponents = () => (
    <Image
      src={styledComponentsIcon}
      alt="styled-components"
      title="styled-components"
      width={65}
      height={65}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
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
    <section className="mx-auto sm:my-12 py-12 flex items-center">
      <div ref={stockTickerRef}>
        <StockTicker>
          {cardImages.map((cardImage, index) => (
            <IconCard
              variant="secondary"
              key={index}
              className="flex flex-col flex-wrap items-center justify-center"
              title={cardImage.alt}
            >
              <div className="hover:transform active:rotate-45 hover:scale-125 transition-all duration-300 ease-in-out object-contain">
                {cardImage.src}
              </div>
            </IconCard>
          ))}
        </StockTicker>
      </div>
      <span className="sr-only">
        Icons: React, JavaScript, CSS, Tailwind, Next.JS, Express, Python, Django, PostgreSQL, MongoDB, Material UI,
        Git, Github, Strapi.js, Figma, TypeScript, Node.js, styled-components, Linux
      </span>
    </section>
  );
};

export default GridIcons;
