"use client";

import { motion } from "framer-motion";

import Seal from "./Seal";
import Cat from "./Cat";
import Dog from "./Dog";

const Landing = (props) => {

    // framer motion
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <div className=" ">
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 3 }}
                className="text-3xl md:text-5xl"
            >
            <div className="flex flex-row justify-normal items-center">
                <Seal />
                <Cat />
                <Dog />
            </div>
            </motion.h1>
        </div>
    );
};

export default Landing;
