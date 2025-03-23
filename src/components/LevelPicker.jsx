import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import usePuzzleStore from "../store/usePuzzleStore";
import { LEVEL_MESSAGES } from "../constants/levelMessages";

function LevelPicker() {
  const setLevel = usePuzzleStore((state) => state.setLevel);
  const [selectedLevel, setSelectedLevel] = useState("Easy");
  const [levelMessage, setLevelMessage] = useState(
    "Take it easy! Perfect for a chill puzzle session. 😌"
  );

  const handleLevelChange = (level) => {
    setLevel(level);
    setSelectedLevel(level);

    setLevelMessage(LEVEL_MESSAGES[level]);
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative flex flex-row rounded-full border-2 border-gray-300 p-0">
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
            className="cursor-pointer text-center font-bold w-24 py-2 rounded-full z-10 transition-all duration-300"
          >
            {level}
          </div>
        ))}
      </div>

      {/* Level Description Message */}
      <motion.span
        className="text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {levelMessage}
      </motion.span>
    </div>
  );
}

export default LevelPicker;
