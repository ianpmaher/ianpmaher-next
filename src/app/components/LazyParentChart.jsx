"use client"; // Ensure this is a client component

import LazyPieChart from "./LazyPieChart";

const LazyParentChart = () => {
  return (
    <div>
      {/* Other components or content */}
      
      {/* The lazy pie chart will load GridIcons when it enters the viewport */}
      <LazyPieChart />

      {/* More components or content */}
    </div>
  );
};

export default LazyParentChart;
