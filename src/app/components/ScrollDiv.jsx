"use client";

import { motion, useScroll } from "framer-motion";

export const ScrollDiv = ({ children }) => {
    const { scrollYProgress } = useScroll();
    return( 
        <motion.div style={{ scaleX: scrollYProgress}} className="fixed top-0 left-0 right-0 h-2 bg-dracula-purple rounded-xl">
            {children}
        </motion.div>
    );
};
