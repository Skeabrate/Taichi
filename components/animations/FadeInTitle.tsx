"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInTitleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInTitle({
  children,
  delay = 0,
  className = "",
}: FadeInTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}
