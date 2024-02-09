"use client";

import Link from "next/link";
import IconCard from "./IconCard";
import Image from "next/image";
import PopoverElem from "./PopoverElem";

const Contact = (props) => {
    return (
        <section className="flex flex-row items-center justify-center">
            <IconCard variant="primary">
                <Link
                    href="https://www.github.com/ianpmaher"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="GitHub"
                    className="outline-white outline-double rounded-xl hover:outline-black"
                >
                    <Image src="/assets/github-icon.svg" alt="GitHub logo" width={50} height={50} />
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
            <IconCard variant="primary">
                <Link
                    href="https://www.linkedin.com/in/ianmaher/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="LinkedIn"
                    className="outline-white outline-double rounded-xl hover:outline-black"
                >
                    <Image src="/assets/linkedin.svg" alt="LinkedIn logo" width={50} height={50} />
                </Link>
            </IconCard>
            <IconCard variant="primary">
                <Link
                    href="https://drive.google.com/file/d/13oKE953LCTEGSpENEqnH6HEVO0NNi_HU/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Resume"
                    className="outline-white outline-double rounded-xl hover:outline-black"
                >
                    <Image src="/assets/document.svg" alt="text document image" width={50} height={50} />
                </Link>
            </IconCard>
        </section>
    );
};

export default Contact;
