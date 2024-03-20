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
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 3 }}
                className="text-3xl md:text-5xl flex flex-col gap-20"
            >
                <div className="flex flex-row justify-normal items-baseline">
                    <Seal />
                    <Cat />
                    <Dog />
                </div>
                <div className="flex flex-row justify-normal items-baseline">
                    <Books />
                    <Hiking1 />
                    <Laptop />
                </div>
            </motion.h1>
        </div>
    );
};

export default Landing;
