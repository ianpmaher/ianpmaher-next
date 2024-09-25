"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import IconCard from "./IconCard";
import { CopyIcon, EnvelopeClosedIcon, ExitIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
// I would love to make my own popover but React children error

const PopoverElem = (props) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ianpmaher@gmail.com");
    setCopySuccess(true);
    // set a timeout to remove the "copied" message
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const { theme } = useTheme();
  let isDark;
  if (theme === "dark") {
    isDark = true;
  } else {
    isDark = false;
  }

  const [mounted, setMounted] = useState(false);

  // useEffect to set mounted to true
  // this is to avoid hydration mismatch // but results in a flash of unstyled content
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className={`flex flex-col flex-wrap items-center justify-center rounded-`} aria-label="open popover">
          <IconCard
            className="bg-dracula-green hover:bg-dracula-orange dark:bg-dracula-yellow dark:hover:bg-dracula-green"
            variant={`${isDark ? "darkColors" : "lightColors"}`}
          >
            <EnvelopeClosedIcon className="md:h-9 md:w-9 h-7 w-7 text-black" />
          </IconCard>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          sideOffset={5}
          alignOffset={5}
          align="center"
          className="bg-[rgba(0,0,0,0.3)] p-2 rounded-xl shadow-lg min-h-full min-w-full flex flex-row items-center justify-center gap-2"
        >
          {/* popover */}
          <Link
            href="mailto:ianpmaher@gmail.com"
            aria-label="send email"
            target="_blank"
            // rel="noreferrer noopener"
            title="Email"
            className={`flex flex-col flex-wrap items-center justify-center rounded-2xl`}
            //     isDark
            //         ? "bg-dracula-purple hover:bg-dracula-green"
            //         : "bg-dracula-blue hover:bg-dracula-orange"
            // }`}
          >
            <IconCard
              className="bg-dracula-green hover:bg-dracula-orange dark:bg-dracula-yellow dark:hover:bg-dracula-green"
              variant={`${isDark ? "darkColors" : "lightColors"}`}
            >
              <PaperPlaneIcon className="md:h-9 md:w-9 h-7 w-7 text-black" />
            </IconCard>
          </Link>

          <IconCard
            className="bg-dracula-green hover:bg-dracula-orange dark:bg-dracula-yellow dark:hover:bg-dracula-green"
            variant={`${isDark ? "darkColors" : "lightColors"}`}
            aria-haspopup="true"
          >
            {/* <Button variant="primary"> */}
            {/* for some reason needed to make the onClick in the image itself? */}
            <CopyIcon className="md:h-9 md:w-9 h-7 w-7 text-black" title="Copy Email Address" aria-label="Copy Email Address" onClick={handleCopy} />
            {/* <Image
              src="/assets/copy-icon.svg"
              alt="copy email address"
              width={36}
              height={36}
              title="Copy Email Address"
              onClick={handleCopy}
              className={`flex flex-col flex-wrap items-center justify-center rounded-2xl `}
            /> */}
            {copySuccess && <div className="text-green-500 md:p-2">Copied!</div>}
            {/* end popover */}
          </IconCard>
          <Popover.Close
            className="rounded-2xl inline-flex items-center justify-center bg-white text-black hover:bg-gray-300 transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            aria-label="close popover"
          >
            <IconCard
            className="bg-dracula-green hover:bg-dracula-orange dark:bg-dracula-yellow dark:hover:bg-dracula-green"
            variant={`${isDark ? "darkColors" : "lightColors"}`}
            aria-haspopup="true"
          >

            <ExitIcon className="md:h-9 md:w-9 h-7 w-7 text-black" />
          </IconCard>
          </Popover.Close>
          <Popover.Arrow className=" fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopoverElem;
