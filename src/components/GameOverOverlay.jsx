import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

import Button from "./Button";

function GameOverOverlay({ resetButtonClickHandler }) {
  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-red-500/75 z-50"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex flex-col items-center justify-center gap-7"
      >
        <h1 className="text-4xl font-bold text-red-950">You Lose!</h1>

        {/* Reset button */}
        <Button
          clickHandler={resetButtonClickHandler}
          classNames="!bg-red-800 text-white px-4 py-2 rounded-md"
          icon={ArrowPathIcon}
        >
          Reset
        </Button>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default GameOverOverlay;
