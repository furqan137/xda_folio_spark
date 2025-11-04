import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

interface MasonryGridProps {
  children: React.ReactNode;
  defaultColumns?: number; // Desktop
  tabletColumns?: number;  // Tablet
  mobileColumns?: number;  // Mobile
  gap?: number;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({
  children,
  defaultColumns = 3,
  tabletColumns = 2,
  mobileColumns = 1,
  gap = 16,
}) => {
  const [columns, setColumns] = useState(defaultColumns);

  // ✅ Responsive columns
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(mobileColumns);
      else if (window.innerWidth < 1024) setColumns(tabletColumns);
      else setColumns(defaultColumns);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [defaultColumns, tabletColumns, mobileColumns]);

  // ✅ Distribute children evenly among columns
  const items = React.Children.toArray(children);
  const columnItems: React.ReactNode[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, index) => {
    columnItems[index % columns].push(item);
  });

  // ✅ Bottom-to-top animation — slower, more elegant
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // ⏳ slower stagger delay
        duration: 0.9,   // 🕰️ slower smooth motion
        ease: [0.25, 0.1, 0.25, 1.0], // 🪶 smooth cubic easing
      },
    }),
  };

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 200, damping: 35 }}
      style={{
        display: "flex",
        marginLeft: -gap,
        alignItems: "flex-start",
      }}
    >
      {columnItems.map((col, colIndex) => (
        <motion.div
          key={colIndex}
          layout
          transition={{ type: "spring", stiffness: 250, damping: 40 }}
          style={{
            paddingLeft: gap,
            flex: 1,
            backgroundClip: "padding-box",
          }}
        >
          {col.map((child, i) => (
            <motion.div
              key={i}
              layout
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 25,
                scale: { duration: 0.3 },
              }}
              style={{
                marginBottom: gap,
                borderRadius: 14,
                overflow: "hidden",
                willChange: "transform",
              }}
              className="hover:shadow-2xl"
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MasonryGrid;
