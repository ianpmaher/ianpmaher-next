// components/ThemeMode.jsx
"use client";

import { useTheme } from "next-themes";
import * as Select from "@radix-ui/react-select";
import { LaptopIcon, MoonIcon, SunIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const ThemeMode = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("system");

  useEffect(() => {
    setMounted(true);
    // Initialize currentTheme based on the theme from next-themes
    if (theme === "system") {
      setCurrentTheme("system");
    } else if (theme === "dark") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }, [theme]);

  if (!mounted) return null;

  const handleThemeChange = (value) => {
    setCurrentTheme(value);
    if (value === "system") {
      setTheme("system");
    } else {
      setTheme(value);
    }
  };

  return (
    <div className={`${className}`}>
      <Select.Root value={currentTheme} onValueChange={handleThemeChange}>
        <Select.Trigger
          className="inline-flex items-center justify-center px-2 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-900 dark:text-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Theme"
        >
          <Select.Value>
            {currentTheme === "system" && <LaptopIcon className="w-5 h-5 mr-2" />}
            {currentTheme === "light" && <SunIcon className="w-5 h-5 mr-2" />}
            {currentTheme === "dark" && <MoonIcon className="w-5 h-5 mr-2" />}
            {/* {currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)} */}
          </Select.Value>
          <Select.Icon className="ml-2">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content className="bg-white dark:bg-gray-800 rounded-md shadow-lg mt-2">
          <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-gray-100 dark:bg-gray-700">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-2">
            <Select.Item
              value="system"
              className="flex items-center px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              aria-label="System Theme"
            >
              <LaptopIcon className="w-5 h-5 mr-2" />
              {/* <Select.ItemText>System</Select.ItemText> */}
              <span className="sr-only">System</span>
              <Select.ItemIndicator className="ml-auto">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item
              value="light"
              className="flex items-center px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              aria-label="Light Theme"
            >
              <SunIcon className="w-5 h-5 mr-2" />
              <span className="sr-only">Light</span>
              {/* <Select.ItemText>Light</Select.ItemText> */}
              <Select.ItemIndicator className="ml-auto">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item
              value="dark"
              className="flex items-center px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              aria-label="Dark Theme"
            >
              <MoonIcon className="w-5 h-5 mr-2" />
              <span className="sr-only">Dark</span>
              {/* <Select.ItemText>Dark</Select.ItemText> */}
              <Select.ItemIndicator className="ml-auto">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-gray-100 dark:bg-gray-700">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default ThemeMode;
