"use client";

import CardBase from "./CardBase";
import { motion } from "framer-motion";

const Resume = (props) => {

    // framer motion
    return (
        <section className="flex flex-col items-center justify-center mx-auto my-0">
            {/* grid container */}
            <div className="flex flex-wrap gap-2 flex-row items-center justify-center md:mx-auto md:my-0 md:list-none">
                <CardBase variant="text">
                    I would love to chat! I am currently seeking a full-time position in software development.
                </CardBase>

                {/* <CardBase variant="text">
                    I leverage my experience as an educator and guidance counselor to my present work, with
                    a focus on communication and an ability to work with people of all backgrounds.
                </CardBase>
                <CardBase variant="text">
                    I thrive in a collaborative environment and am enthusiastic about projects centered on lifelong
                    learning and inclusion.
                </CardBase >
                <span /> */}
            </div>
        </section>
    );
};

export default Resume;
