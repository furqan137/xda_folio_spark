import React from "react";

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties["animationDuration"];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "#22d3ee",
  speed = "3.5s",
  thickness = 2,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-lg ${className}`}
      {...(rest as any)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as any).style
      }}
    >
      {/* Bottom Glow */}
      <div
        className="absolute w-[300%] h-[120%] opacity-70 bottom-[-20px] right-[-150%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 25%)`,
          animation: `star-movement-bottom ${speed} linear infinite alternate`
        }}
      ></div>

      {/* Top Glow */}
      <div
        className="absolute w-[300%] h-[120%] opacity-70 top-[-20px] left-[-150%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 25%)`,
          animation: `star-movement-top ${speed} linear infinite alternate`
        }}
      ></div>

      {/* Inner Button */}
      <div
        className="relative z-1 bg-[#0b0b0e] border border-[#1a1a1f] text-text-secondary text-center text-sm font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:bg-[#121218]"
        style={{
          borderWidth: `${thickness}px`,
          ["--accent" as any]: color
        }}
      >
        {children}
      </div>
      <style>
        {`
          @keyframes star-movement-bottom {
            0% { transform: translate(0%, 0%); opacity: 1; }
            100% { transform: translate(-100%, 0%); opacity: 0; }
          }
          @keyframes star-movement-top {
            0% { transform: translate(0%, 0%); opacity: 1; }
            100% { transform: translate(100%, 0%); opacity: 0; }
          }
        `}
      </style>
    </Component>
  );
};

export default StarBorder;
