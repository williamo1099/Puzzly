import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Overlay({ children, classNames = "" }) {
  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 ${classNames}`}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex flex-col items-center justify-center w-full gap-7"
      >
        {children}
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default Overlay;
