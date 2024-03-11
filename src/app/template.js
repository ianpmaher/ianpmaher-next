"use client";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: -100, y: 100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.5 } },
};

export default function Template({ children }) {
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, type: "linear" }}
        >
            {children}
        </motion.main>
    );
}

// templates create a new instance for each of their children on navigation.
// This means that when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated,
// state is not preserved, and effects are re-synchronized. — Next.js docs
