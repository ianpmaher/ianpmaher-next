"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import IconCard from "./IconCard";
import Image from "next/image";
import PopoverElem from "./PopoverElem";

const Contact = (props) => {
    // conditional rendering, if user is on mobile and if Contact is in the footer, flex row, else flex column

    const { theme } = useTheme();
    let isDark;
    if (theme === "dark") {
        isDark = true;
    } else {
        isDark = false;
    }

    const isFooter = props.location === "footer";

    return (
        // <section className="flex gap-3 items-center justify-center md:flex-row flex-col">
        <section
            className={`flex gap-1 items-center justify-center ${
                isFooter ? "md:flex-row flex-row" : "md:flex-row flex-col"
            }`}
        >
            <IconCard variant={`${isDark ? "darkColors" : "lightColors"}`}>
                <Link
                    href="https://www.github.com/ianpmaher"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="GitHub"
                    className={` rounded-2xl`}
                >
                    <Image src="/assets/github-icon.svg" alt="GitHub logo" width={40} height={40} />
                </Link>
            </IconCard>
            {/* <IconCard variant="primary"> */}
            {/* <Link
                    href="mailto:ianpmaher@gmail.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Email"
                    className="outline-white outline-double rounded-xl hover:outline-black"
                >
                    <Image src="/assets/email.svg" alt="email me!" width={50} height={50} />
                </Link> */}
            <PopoverElem />
            {/* </IconCard> */}
            <IconCard variant={`${isDark ? "darkColors" : "lightColors"}`}>
                <Link
                    href="https://www.linkedin.com/in/ianmaher/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="LinkedIn"
                    className=" rounded-2xl"
                >
                    <Image src="/assets/linkedin.svg" alt="LinkedIn logo" width={40} height={40} />
                </Link>
            </IconCard>
            <IconCard variant={`${isDark ? "darkColors" : "lightColors"}`}>
                <Link
                    href="https://drive.google.com/file/d/13oKE953LCTEGSpENEqnH6HEVO0NNi_HU/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Resume"
                    className=" rounded-2xl"
                >
                    <Image src="/assets/document.svg" alt="text document image" width={40} height={40} />
                </Link>
            </IconCard>
        </section>
    );
};

export default Contact;
