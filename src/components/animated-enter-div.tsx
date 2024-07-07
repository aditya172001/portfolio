"use client";

import { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { NodeProps } from "postcss";
import { InferGetStaticPropsType } from "next";

export function AnimatedEnterDiv({
  stagger,
  children,
  className,
}: {
  stagger: number;
  children: ReactNode;
  className?: string;
}): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * stagger, duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
