import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const StockTicker = ({ children }) => {
    const tickerRef = useRef(null);
    const controls = useAnimation();

    const handleClick = () => {
        if (controls.isAnimating()) {
            controls.stop();
        } else {
            controls.start();
        }
    };

    React.useEffect(() => {
        const ticker = tickerRef.current;
        const scrollWidth = ticker.scrollWidth;
        const offsetWidth = ticker.offsetWidth;
        const distance = scrollWidth - offsetWidth;

        const scrollAnimation = {
            x: [-distance, 0],
            transition: { duration: distance / 100, ease: "linear", repeat: Infinity, flip: true },
        };

        controls.start(scrollAnimation);
    }, [controls]);

    return (
        <div className="stock-ticker w-full h-32 overflow-hidden relative" ref={tickerRef} onClick={handleClick}>
            <motion.div
                className="stock-ticker-inner flex whitespace-nowrap absolute top-0 left-0 w-max h-full"
                animate={controls}
                initial={false}
                variants={{
                    scroll: () => ({
                        x: [-100, 0],
                    }),
                }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};

export default StockTicker;
