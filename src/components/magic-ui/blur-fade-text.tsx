"use client";

import { motion, type Variants } from "motion/react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}
const BlurFadeText = ({
  text,
  className,
  variant,
  duration = 0.4,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: -yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => {
    const occurrences = new Map<string, number>();

    return Array.from(text).map((char) => {
      const occurrence = occurrences.get(char) ?? 0;
      occurrences.set(char, occurrence + 1);
      return { char, key: `${char}-${occurrence}` };
    });
  }, [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        {characters.map(({ char, key }, i) => {
          const charVariants: Variants = {
            hidden: { y: -yOffset, opacity: 0, filter: "blur(8px)" },
            visible: { y: 0, opacity: 1, filter: "blur(0px)" },
          };
          return (
            <motion.span
              key={key}
              initial="hidden"
              animate="visible"
              variants={charVariants}
              transition={{
                duration,
                delay: delay + i * characterDelay,
                ease: "easeOut",
              }}
              className={cn("inline-block", className)}
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={combinedVariants}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
        className={cn("inline-block", className)}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default BlurFadeText;
