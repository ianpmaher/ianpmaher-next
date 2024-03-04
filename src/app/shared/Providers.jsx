"use client";
import { ThemeProvider } from "next-themes"; // this needs to be in client components

export default function Providers({ children }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
