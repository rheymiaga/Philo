// FadeUp.tsx
import { motion } from "framer-motion";
import React from "react";

interface FadeUpProps {
    children: React.ReactNode;
    delay?: number; // optional stagger delay
    duration?: number; // optional duration
}

export const FadeUp: React.FC<FadeUpProps> = ({
    children,
    delay = 0,
    duration = 0.8,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};