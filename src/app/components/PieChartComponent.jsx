"use client";

import { PieChart } from "react-minimal-pie-chart";

const PieChartComponent = () => {
  return (
    <div className="py-2 flex justify-center items-center flex-col">
      <h4 className="text-2xl mb-4">Time spent learning</h4>
      <PieChart
        className="center-center hover:invert transition-all duration-1000 ease-in-out"
        style={{ height: "50%", width: "40%" }}
        label={({ dataEntry }) => dataEntry.title}
        animate
        labelStyle={(index) => ({
          fontSize: "5px",
          fontFamily: "sans-serif",
          fill: "white",
        })}
        segmentsStyle={{ transition: "stroke .3s" }}
        data={[
          { title: "CCNA / Networking 🛜", value: 50, color: "#8AC926" },
          { title: "TypeScript 👨‍💻", value: 30, color: "#1982C4" },
          { title: "Linux 🐧", value: 20, color: "#FF595E" },
        ]}
      />
    </div>
  );
};

export default PieChartComponent;
