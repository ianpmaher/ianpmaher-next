"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const DarkMode = (props) => {
    const { theme, setTheme } = useTheme();
    const [value, setValue] = useState("dark");
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

    const handleSliderChange = (event) => {
        setValue(event.target.value);
        setTheme(options[event.target.value].name);
        console.log("theme", theme);
    };

    return (
        <div className="flex flex-row justify-center gap-1 mx-0 my-auto">
            <input
                type="range"
                className="w-8 h-8"
                value={value}
                step="1"
                min="1"
                max="2"
                onChange={handleSliderChange}
            />
            {theme == "dark" ? (
                <Image alt={options[2].name} src={options[2].url} width={16} height={16} />
            ) : (
                <Image alt={options[1].name} src={options[1].url} width={16} height={16} />
            )}
        </div>
    );
};
export default DarkMode;
