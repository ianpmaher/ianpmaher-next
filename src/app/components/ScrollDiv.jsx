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

const ScrollYDiv = ({ children, className }) => {
    const { scrollYProgress } = useScroll();
    const progressStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 1,
        height: "10px",
        width: "100vw",
        backgroundColor: "#bd93f9",
        borderRadius: "8px",
        transformOrigin: "top left",
        scaleX: scrollYProgress,
    };

    return (
        <motion.div style={progressStyle} >
            {children}
        </motion.div>
    );
    // return( 
    //     <motion.div style={{ scaleY: scrollYProgress}} className={`${className}` }>
    //         {children}
    //     </motion.div>
    // );
};

export default ScrollYDiv;