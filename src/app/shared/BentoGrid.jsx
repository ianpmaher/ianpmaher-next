export const BentoGrid = ({
  gridCols = 2,
  gridRows = 2,
  // rowHeight = 100,
  className,
  children,
}) => {
  return (
    <div className="">
      <div
        className={`md:grid flex flex-col md:justify-items-center ${className ?? ""}`}
        style={{
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 2fr))`,
          gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr)`,
          // gridAutoRows: `${rowHeight}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const BentoItem = ({ children, gridCols = 1, rowHeight = 1, className }) => {
  return (
    <div
      className={`min-h-fit max-w-6xl ${className ?? ""}`}
      style={{
        alignSelf: "center",
        gridColumn: `span ${gridCols} / span ${gridCols}`,
        // gridRow: `span ${rowHeight} / span ${rowHeight}`,
      }}
    >
      {children}
    </div>
  );
};
