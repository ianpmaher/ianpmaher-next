"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";
import { CopyIcon, PaperPlaneIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import IconCard from "./IconCard";
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
                <button
                    variant={`${isDark ? "darkColors" : "lightColors"}`}
                    className={`flex flex-col flex-wrap items-center justify-center rounded-2xl transition-all duration-200 ease-in-out hover:scale-110 bg-white outline-white outline-2 outline object-contain hover:transform hover:rotate-12 hover:shadow-2xl ${isDark ? "bg-dracula-text hover:bg-dracula-green" : "bg-paper-subalt hover:bg-dracula-orange"}`}
                    aria-label="open popover"
                >
                    <Image src="/assets/email.svg" title="email" alt="Email Icon" width={40} height={40} />
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
                    <IconCard variant="primary" aria-haspopup="true">
                        {/* popover */}
                        <Link
                            href="mailto:ianpmaher@gmail.com"
                            aria-label="send email"
                            target="_blank"
                            rel="noreferrer noopener"
                            title="Email"
                            className="outline-white outline-2 outline rounded-2xl"
                        >
                            <Image src="/assets/paper-plane-radix.svg" alt="paper plane Icon" width={40} height={40} />
                        </Link>
                    </IconCard>
                    <IconCard variant="primary" aria-haspopup="true">
                        {/* <Button variant="primary"> */}
                        {/* for some reason needed to make the onClick in the image itself? */}
                        <Image
                            src="/assets/copy-icon.svg"
                            alt="copy email address"
                            width={40}
                            height={40}
                            title="Copy Email Address"
                            onClick={handleCopy}
                            className="outline-white outline-2 outline rounded-2xl"
                        />
                        {copySuccess && <div className="text-green-500 p-2">Copied!</div>}
                        {/* end popover */}
                    </IconCard>
                    <Popover.Close
                        className="rounded-full inline-flex items-center justify-center bg-white text-black hover:bg-gray-300 transition-all duration-300 ease-in-out p-1 hover:scale-110 hover:opacity-90"
                        aria-label="close popover"
                    >
                        <Image src="/assets/exit.svg" alt="exit" title="close" width={30} height={30} />
                    </Popover.Close>
                    <Popover.Arrow className=" fill-white" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

export default PopoverElem;
