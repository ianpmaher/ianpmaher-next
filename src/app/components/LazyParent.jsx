"use client"; // Ensure this is a client component

import LazyGridIcons from "../components/LazyGridIcons";

const LazyParent = () => {
  return (
    <div>
      {/* Other components or content */}
      
      {/* The LazyLoadGridIcons will load GridIcons when it enters the viewport */}
      <LazyGridIcons />

      {/* More components or content */}
    </div>
  );
};

export default LazyParent;
