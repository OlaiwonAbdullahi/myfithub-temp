"use client";

import { motion } from "framer-motion";
import React from "react";

const balls = [1, 2, 3, 4];

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/15 backdrop-blur-2xl flex items-center justify-center z-50">
      <div className="flex items-end gap-2">
        {balls.map((_, i) => (
          <motion.span
            key={i}
            className="w-4 h-4 bg-primary rounded-full"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
