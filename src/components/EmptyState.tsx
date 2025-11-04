import React from "react";
import { motion } from "framer-motion";
import NothingState from "../images/nittin_nothingstate.png";

interface EmptyStateProps {
  reason?: React.ReactNode;
  title?: string;
  description?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ reason, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-5 text-gray-300"
      aria-label="Empty state area"
    >
      <motion.img
        src={NothingState}
        alt="Nittin peeking from the box - empty state illustration"
        className="w-48 h-48 select-none"
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <h2 className="text-xl font-semibold text-center">{title || reason || "The box is empty."}</h2>
      <p className="text-sm text-gray-400 text-center leading-relaxed max-w-sm">
        {description || (
          <>
            Nothing to see .. maybe it drifted elsewhere. <br />
            Nittin peeked inside twice — still nothing here.
          </>
        )}
      </p>
      <div className="text-xs text-gray-500 italic pt-2 text-center">
        This space updates when new creations or projects appear.
      </div>
    </motion.div>
  );
};

export default EmptyState;
