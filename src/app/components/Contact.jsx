"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import IconCard from "./IconCard";
import Image from "next/image";
import PopoverElem from "./PopoverElem";
import { FileTextIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

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
      className={`flex gap-2 items-center justify-center shadow-xl ${
        isFooter ? "md:flex-row flex-row" : "md:flex-row flex-row"
      }`}
    >
      <IconCard
        className="bg-dracula-pink hover:bg-dracula-orange dark:bg-dracula-blue dark:hover:bg-dracula-green"
        variant={`${isDark ? "darkColors" : "lightColors"}`}
      >
        <Link href="https://www.github.com/ianpmaher" target="_blank" rel="" title="GitHub" className={`rounded-2xl`}>
          <GitHubLogoIcon className="md:h-10 md:w-10 h-8 w-8 text-black" />
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
      <IconCard
        className="bg-dracula-blue hover:bg-dracula-orange dark:bg-dracula-purple dark:hover:bg-dracula-green"
        variant={`${isDark ? "darkColors" : "lightColors"}`}
      >
        <Link
          href="https://www.linkedin.com/in/ianmaher/"
          target="_blank"
          // rel="noreferrer noopener"
          title="LinkedIn"
          className="rounded-2xl"
          aria-label="LinkedIn"
        >
          <LinkedInLogoIcon className="md:h-10 md:w-10 h-8 w-8 text-black" />
        </Link>
      </IconCard>
      <IconCard
        className="bg-dracula-purple hover:bg-dracula-orange dark:bg-dracula-pink dark:hover:bg-dracula-green"
        variant={`${isDark ? "darkColors" : "lightColors"}`}
      >
        <Link
          href="https://drive.google.com/file/d/1S3Z0SHbmL8AsLn1BVAllOvBuvpRAP8Gj/view?usp=sharing"
          target="_blank"
          // rel="noreferrer noopener"
          title="Resume"
          className="rounded-2xl"
          aria-label="Resume"
        >
          <FileTextIcon className="md:h-10 md:w-10 h-8 w-8 text-black" />
        </Link>
      </IconCard>
    </section>
  );
};

export default Contact;
