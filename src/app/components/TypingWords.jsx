"use client";

import { motion } from "framer-motion";
import React from "react";

export function TypingWords(props) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [i, setI] = React.useState(0);
  const [j, setJ] = React.useState(0);

  React.useEffect(() => {
    const textArr = [
      "software engineering",
      "ancient history",
      "computer hardware",
      "hiking",
      "dogs",
      "coffee",
      "data science",
      "travel",
    ];
    if (i < textArr.length) {
      const typingEffect = setInterval(() => {
        if (j < textArr[i].length) {
          setDisplayedText((prevText) => prevText + textArr[i][j]);
          setJ(j + 1);
        } else {
          clearInterval(typingEffect);
          setTimeout(() => {
            setDisplayedText("");
            setJ(0);
            setI(i === textArr.length - 1 ? 0 : i + 1);
          }, 1000); // NUMBER TO PAUSE BETWEEN WORDS
        }
      }, 150); // NUMBER TO PAUSE BETWEEN LETTERS

      return () => {
        clearInterval(typingEffect);
      };
    }
  }, [i, j]);

  return (
    <div className="center-center translate-x-1/2 -translate-y-1/2 max-w-max ">
      <h1 className="text-center font-display text-xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-xl md:leading-[2rem] caret-lime-400 car">
        {displayedText ? displayedText : ""}
      </h1>
    </div>
  );
}
