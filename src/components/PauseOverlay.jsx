import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PlayIcon } from "@heroicons/react/24/solid";

import InfoButton from "./InfoButton";

function PauseOverlay({ playButtonClickHandler }) {
  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-overlay-background z-50"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex flex-col items-center justify-center w-full gap-7"
      >
        <h1 className="text-4xl font-bold text-black">Paused</h1>

        <InfoButton
          classNames="!static !w-20 !h-20 z-20"
          clickHandler={playButtonClickHandler}
          icon={PlayIcon}
        />
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default PauseOverlay;
