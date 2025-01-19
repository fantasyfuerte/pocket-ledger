"use client";

import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "motion/react";

function TransitionPage() {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen z-50 bg-middleColor"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0, duration: 1, ease: "easeInOut" }}
        />
      </div>
    </AnimatePresence>
  );
}

export default TransitionPage;
