"use client";
import { useEffect, useState } from "react";

export function useMediaQuery(query) {
    const getMatches = (query) => {
        // prevents SSR issues
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches;
        }
        return false;
    };

    const [matches, setMatches] = useState(getMatches(query));

    function handleChange() {
        setMatches(getMatches(query));
    }

    useEffect(() => {
        const matchMedia = window.matchMedia(query);

        // will trigger at the first client-side load
        // and if query condition changes
        handleChange();

        // listen for query changes
        matchMedia.addEventListener("change", handleChange);

        return () => {
            // remove event listener on cleanup
            matchMedia.removeEventListener("change", handleChange);
        };
    // }, [query]);
    });


    return matches;
}
