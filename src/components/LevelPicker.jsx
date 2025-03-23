import React, { useState } from "react";
import { motion } from "framer-motion";
import usePuzzleStore from "../store/usePuzzleStore";

function LevelPicker() {
  const setLevel = usePuzzleStore((state) => state.setLevel);
  const [selectedLevel, setSelectedLevel] = useState("Easy");

  const handleLevelChange = (level) => {
    setLevel(level);
    setSelectedLevel(level);
  };

  return (
    <div className="relative flex flex-row rounded-full border-2 p-0 mt-5">
      {/* Sliding background */}
      <motion.div
        className="absolute bg-primary rounded-full h-full w-1/3"
        animate={{
          x:
            selectedLevel === "Easy"
              ? "0%"
              : selectedLevel === "Medium"
              ? "100%"
              : "200%",
        }}
        transition={{ duration: 0.1, ease: "linear" }}
      />

      {["Easy", "Medium", "Hard"].map((level) => (
        <div
          key={level}
          onClick={() => handleLevelChange(level)}
          className={`cursor-pointer text-center font-bold w-20 py-2 rounded-full z-10 transition-all duration-300 ${
            selectedLevel === level
              ? "text-white"
              : "text-foreground-light dark:text-foreground-dark"
          }`}
        >
          {level}
        </div>
      ))}
    </div>
  );
}

export default LevelPicker;
