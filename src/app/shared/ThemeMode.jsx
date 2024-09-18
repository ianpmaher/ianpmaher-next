"use client";

// components/ThemeMode.jsx
// components/ThemeMode.jsx
import { useTheme } from "next-themes";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const ThemeMode = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`${className}`}>
      <ToggleGroup.Root
        type="single"
        value={theme}
        onValueChange={setTheme}
        className="flex md:space-x-2"
      >
        <ToggleGroup.Item value="system" className="p-1 hover:scale-110 transition-all duration-200">
          <LaptopIcon className="md:w-6 md:h-6" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="light" className="p-1 hover:scale-110 transition-all duration-200">
          <SunIcon className="md:w-6 md:h-6" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="dark" className="p-1 hover:scale-110 transition-all duration-200">
          <MoonIcon className="md:w-6 md:h-6" />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
};

export default ThemeMode;