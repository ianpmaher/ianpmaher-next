export const BentoGrid = ({
  gridCols = 3,
  gridRows = 2,
  // rowHeight = 100,
  className,
  children,
}) => {
  return (
    <div
      className={`grid ${className ?? ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr)`,
        // gridAutoRows: `${rowHeight}px`,
      }}
    >
      {children}
    </div>
  );
};

export const BentoItem = ({
  children,
  gridCols = 1,
  rowHeight = 1,
  className,
}) => {
  return (
    <div
      className={`min-h-fit min-w-fit ${className ?? ""}`}
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