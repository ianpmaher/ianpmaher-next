"use client";

import { motion } from "framer-motion";

import Seal from "./Seal";
import Cat from "./Cat";
import Dog from "./Dog";
import Hiking from "./Hiking1";
import Hiking1 from "./Hiking1";
import Laptop from "./Laptop";
import Books from "./Books";

const Landing = (props) => {
    // framer motion
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div className="">
            <div className="  rounded-2xl px-1 md:px-3 py-1 w-fit">
                <h1 className=" text-3xl md:text-5xl">Ian Maher</h1>
                <h2 className="text-2xl md:text-3xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                    >
                        Full Stack Developer & Education Advocate
                    </motion.span>
                </h2>
                {/* <h2 className=" text-2xl md:text-3xl">Full Stack Developer & Education Advocate</h2> */}
            </div>
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 2, duration: 3 }}
                className="text-3xl md:text-5xl flex flex-col gap-20 p-10 md:p-0"
            >
                <div className="flex flex-row justify-normal items-baseline">
                    <Seal />
                    <Cat />
                    <Dog />
                </div>
                <div className="flex flex-row justify-normal items-baseline">
                    <Books />
                    <Laptop />
                    <Hiking1 />
                </div>
            </motion.h1>
        </div>
    );
};

export default Landing;
