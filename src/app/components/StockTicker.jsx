import React, { useState, useRef } from "react";
import Ticker from "framer-motion-ticker";
import { motion, useAnimation } from "framer-motion";

const StockTicker = ({ children }) => {
    const [isPlaying, setIsPlaying] = React.useState(true);
    // const tickerRef = useRef(null);
    // const controls = useAnimation();

    // const handleClick = () => {
    //     if (controls.isAnimating()) {
    //         controls.stop();
    //     } else {
    //         controls.start();
    //     }
    // };

    // React.useEffect(() => {
    //     const ticker = tickerRef.current;
    //     const scrollWidth = ticker.scrollWidth;
    //     const offsetWidth = ticker.offsetWidth;
    //     const distance = scrollWidth - offsetWidth;

    //     const scrollAnimation = {
    //         x: [-distance, -distance / 2, 0],
    //         transition: { duration: distance / 100, ease: [0.61, 1, 0.88, 1], repeat: Infinity, flip: true },
    //     };

    //     controls.start(scrollAnimation);
    // }, [controls]);

    return (
        <div className="stock-ticker w-full h-32 overflow-hidden relative ">
        {/* <div className="stock-ticker w-full h-32 overflow-hidden relative" ref={tickerRef} onClick={handleClick}> */}
            {/* <motion.div
                className="stock-ticker-inner flex whitespace-nowrap absolute top-0 left-0 w-max h-full"
                animate={controls}
                initial={false}
                transition={{ type: "spring", stiffness: 100, damping: 20}}
                variants={{
                    scroll: () => ({
                        x: [-100, 0],
                        
                    }),
                }}
            > */}
            <div className="stock-ticker-inner flex whitespace-nowrap absolute top-0 left-0 w-max h-full">

            <Ticker
                duration={45}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                isPlaying={isPlaying}
                >
                {children}
                {children}
            </Ticker>
                </div>
            {/* </motion.div> */}
        </div>
    );
};

export default StockTicker;
