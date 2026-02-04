"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInImageProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInImage({
  children,
  delay = 0.2,
  className = "",
}: FadeInImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
