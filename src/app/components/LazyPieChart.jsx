// components/LazyLoadGridIcons.jsx
"use client"; // Ensure this is a client component

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import GridIcons with no SSR
const DynamicChart = dynamic(() => import("./PieChartComponent"), {
  loading: () => <p>Loading chart...</p>,
  ssr: false,
});

const LazyPieChart = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null, // Observe within the viewport
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the component is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (observer && observer.disconnect) observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {isVisible ? <DynamicChart /> : <p>Icons are loading when visible...</p>}
    </div>
  );
};

export default LazyPieChart;
