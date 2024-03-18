"use client";

import Image from "next/image";
import IconCard from "./IconCard";
import { motion } from "framer-motion";

const Resume = (props) => {

    // framer motion
    return (
        <section className="flex flex-col items-center justify-center mx-auto my-0">
            {/* grid container */}
            <div className="flex flex-wrap flex-row items-center justify-center md:grid md:grid-cols-2 md:gap-0.5 md:p-1 md:place-content-center md:place-items-center md:mx-auto md:my-0 md:list-none">
                <IconCard variant="projects">
                    I am a creative and process-driven full stack software developer with enthusiasm for building
                    accessible designs and constructing technical solutions with the user in mind.
                </IconCard>

                <span />

                <span />
                <IconCard variant="projects">
                    I leverage my professional experience as an educator and guidance counselor to my present work, with
                    a focus on communication and an ability to work with people of all backgrounds.
                </IconCard>
                <IconCard variant="projects">
                    I thrive in a collaborative environment and am enthusiastic about projects centered on lifelong
                    learning and inclusion.
                </IconCard >
                <span />
            </div>
        </section>
    );
};

export default Resume;
