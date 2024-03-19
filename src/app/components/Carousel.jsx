"use client";

import { useState, useEffect } from "react";

const Carousel = ({ children }) => {
    const [index, setIndex] = useState(0);

    return (
        <div className="mx-auto my-0 whitespace-nowrap overflow-hidden">
            <div className=" flex gap-4 p-4 animate-marquee">
                {children.map((child, i) => {
                    return (
                        <div key={i} className={`inline-block w-1/8`}>
                            {child}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
