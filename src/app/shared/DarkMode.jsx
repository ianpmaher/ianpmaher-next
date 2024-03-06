"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const DarkMode = (props) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect to set mounted to true https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    // mapping options of slider to theme
    const options = {
        1: {
            name: "light",
            url: "/assets/lightmode.svg",
        },
        2: {
            name: "dark",
            url: "/assets/darkmode.svg",
        },
    };

    const handleSwitchChange = (event) => {
        setTheme(event.target.checked ? "dark" : "light")
        console.log("theme", theme);
    };

    return (
        <div className="flex flex-row justify-center items-center mx-auto my-0 absolute right-1 top-1">
            <label className="switchbox flex justify-center items-center w-10 h-10 rounded-xl outline outline-white">
                <input
                    type="checkbox"
                    className="w-10 h-10 mx-auto my-0 opacity-0 absolute checked:bg-blue-400 transition-all duration-300 ease-in-out"
                    checked={theme == "dark"}
                    onChange={handleSwitchChange}
                />
                {theme == "dark" ? (
                    <Image alt={options[2].name} src={options[2].url} width={32} height={32} />
                ) : (
                    <Image alt={options[1].name} src={options[1].url} width={32} height={32} />
                )}
                {/* slider */}
                <span className="slider absolute top-0 right-0 bottom-0 left-0 cursor-pointer "></span>
            </label>
        </div>
    );
};
export default DarkMode;
