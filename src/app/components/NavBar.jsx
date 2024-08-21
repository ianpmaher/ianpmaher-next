"use client";

import { useState, useEffect, useRef } from "react";
// import styled from "styled-components";
// import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { useMediaQuery } from "../../lib/useMediaQuery";
import { Link } from "react-scroll";
// TODO - see if react-scroll Link is compatible with Next.js Link
// import Link from "next/link";
import Button from "./Button";
// context

// const FlexContainer = styled.div`
//     display: flex;
//     flex-flow: row wrap;
//     justify-content: center;
//     align-items: center;
//     color: white;
// `;

// ========================= //
// FRAMER variants
// nav variant

const navMotion = {
    // initial state ==== hidden
    hidden: {
        y: "100%",
        opacity: 0,
        transition: {
            duration: 0.2,
            staggerChildren: 0.15,
            ease: "easeInOut",
        },
    },
    // animate state ==== visible
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            when: "beforeChildren",
            staggerChildren: 0.15,
            ease: "easeInOut",
        },
    },
    // exit state ==== hidden
    exit: {
        y: "100%",
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
            when: "afterChildren",
            staggerChildren: 0.15,
            staggerDirection: -1,
        },
    },
};

// ========================= //
// nav item variants
const navItemMotion = {
    // initial == hidden
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
    // animate == visible
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
    // exit == hidden
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};

const Navbar = () => {
    // const { isDesktop, isOpen, setIsOpen, scrollBackground } = useContext(NavbarContext);
    // media query hook
    // const isDesktop = useMediaQuery("(min-width: 1024px)");
    const isDesktop = true;
    // hamburger menu toggle state
    const [isOpen, setIsOpen] = useState(false);
    // background change on scroll state
    const [scrollBackground, setScrollBackground] = useState(false);

    // change background function
    const changeBackground = () => {
        if (window.scrollY > 50) {
            setScrollBackground(true);
        } else {
            setScrollBackground(false);
        }
    };

    // event listener for scroll
    // window.addEventListener("scroll", changeBackground);

    // useEffect for preventing scroll when nav is toggled
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <nav
        // className={
        //     scrollBackground
        //         ? "bg-white h-14 w-[calc(100%-2rem)] fixed top-0 left-4 z-10 flex items-center justify-between p-8 font-medium my-2 transition ease-in-out duration-200 shadow-lg"
        //         : "bg-white h-14 w-[calc(100%-2rem)] fixed top-0 left-4 z-10 flex items-center justify-between p-8 font-medium my-2 transition ease-in-out duration-200"
        // }
        >
            {/* DESKTOP Navbar */}
            {isDesktop && (
                // <div className="flex flex-row items-center justify-center flex-wrap ">
                <div className="fixed left-0 mx-2 my-1 flex flex-col gap-2">
                    {/* <FlexContainer> */}
                    <Button variant="primary" aria-label="scroll to header section"  className="px-2 py-1 rounded-md text-xl">
                        <Link to="top" smooth={true} duration={100}>
                        🔝
                        </Link>
                    </Button>

                    <Button variant="primary" aria-label="scroll to About section"  className="px-2 py-1 rounded-md">
                        <Link to="about" smooth={true} duration={100}>
                            About
                        </Link>
                    </Button>
                    <Button variant="primary" aria-label="scroll to Projects section" className="px-2 py-1 rounded-md">
                        <Link to="projects" smooth={true} duration={1000}>
                        Projects
                        </Link>
                    </Button>
                    <Button variant="primary" aria-label="scroll to Resume section" className="px-2 py-1 rounded-md">
                        <Link to="resume" smooth={true} duration={1000}>
                        Resume
                        </Link>
                    </Button>
                    {/* </FlexContainer> */}
                </div>
            )}
            {/* MOBILE Navbar */}
            {!isDesktop && (
                <div className="flex flex-row items-center justify-between w-full">
                    {/* <Link
                        to="home"
                        smooth={true}
                        duration={0}
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsOpen(false)}
                    ></Link> */}
                    <div onClick={() => setIsOpen((prevOpen) => !prevOpen)} className="space-y-1.5 cursor-pointer z-50">
                        <motion.div
                            onClick={() => setIsOpen(false)}
                            style={{ cursor: "pointer" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#000"
                                style={{ width: "2rem", height: "2rem" }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            )}
            {/* MOBILE Nav Menu */}
            <AnimatePresence>
                {isOpen && !isDesktop && (
                    <motion.div
                        variants={navMotion}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-5 left-0 w-full h-screen bg-[#5ECBF7] flex flex-col items-center justify-center"
                    >
                        <div>
                            <motion.div variants={navItemMotion}>
                                {/* <Link
                                    to="about"
                                    smooth={true}
                                    duration={0}
                                    onClick={() => setIsOpen(false)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <FlexContainer>
                                        <h1 style={{"writingMode": "horizontal-tb"}}>Home</h1>
                                    </FlexContainer>
                                </Link> */}
                            </motion.div>
                            <motion.div variants={navItemMotion}>
                                {/* <Link
                                    to="projects"
                                    smooth={true}
                                    duration={0}
                                    onClick={() => setIsOpen(false)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <FlexContainer>
                                        <h1>Projects</h1>
                                    </FlexContainer>
                                </Link> */}
                            </motion.div>
                            <motion.div variants={navItemMotion}>
                                {/* <Link
                                    to="resume"
                                    smooth={true}
                                    duration={0}
                                    onClick={() => setIsOpen(false)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <FlexContainer>
                                        <h1>Resume</h1>
                                    </FlexContainer>
                                </Link> */}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
