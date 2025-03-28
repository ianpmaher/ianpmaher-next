"use client";

import { motion } from "framer-motion";

import Seal from "./Seal";
import Cat from "./Cat";
import Dog from "./Dog";
import Hiking from "./Hiking1";
import Hiking1 from "./Hiking1";
import Laptop from "./Laptop";
import Books from "./Books";
import FirstName from "./FirstName";
import LazyLoadCat from "./LazyCat";

const Landing = (props) => {
  // framer motion
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <div className=" rounded-2xl px-1 md:px-3 py-4 md:py-1 w-fit">
        {/* <h1 className=" text-3xl md:text-5xl">Ian Maher</h1> */}
        <noscript className="sr-only">Ian Maher</noscript>
        <h2 className="text-xl md:text-4xl">Ian Maher</h2>
        {/* <FirstName /> */}
        <h3 className="text-xl md:text-xl m-3">Technical Writer & Frontend Developer</h3>
        {/* <h2 className=" text-2xl md:text-3xl">Full Stack Developer & Education Advocate</h2> */}
      </div>

      <div className="text-xl md:text-5xl flex flex-col gap-12 ">
        <div className="flex flex-row justify-normal items-baseline">
          <Seal />
          <LazyLoadCat />
          <Dog />
        </div>
        <div className="flex flex-row justify-normal items-baseline">
          <Books />
          <Laptop />
          <Hiking1 />
        </div>
      </div>
    </div>
  );
};

export default Landing;
