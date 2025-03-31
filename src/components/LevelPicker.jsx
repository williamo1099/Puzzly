import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { LEVELS } from "../constants/levels";
import { LEVEL_MESSAGES } from "../constants/levelMessages";

function LevelPicker({ levelChangeHandler }) {
  const [selectedLevel, setSelectedLevel] = useState("Easy");
  const [levelMessage, setLevelMessage] = useState(LEVEL_MESSAGES[LEVELS[0]]);

  const handleLevelChange = (level) => {
    if (level === selectedLevel) return;
    levelChangeHandler();
    setSelectedLevel(level);
    setLevelMessage(LEVEL_MESSAGES[level]);
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative flex flex-row rounded-full border-2 border-gray-400 p-0">
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
          transition={{ duration: 0.25, ease: "linear" }}
        />

        {LEVELS.map((level) => (
          <span
            key={level}
            onClick={() => handleLevelChange(level)}
            className="cursor-pointer text-center font-bold w-24 py-2 rounded-full z-10 transition-all duration-300"
          >
            {level}
          </span>
        ))}
      </div>

      {/* Level Description Message */}
      <motion.span
        className="text-gray-500"
        initial={{
          opacity: 0.5,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {levelMessage}
      </motion.span>
    </div>
  );
}

export default LevelPicker;
