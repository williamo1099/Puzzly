import { useState } from "react";
import { useDrop } from "react-dnd";

import usePuzzleStore from "../store/usePuzzleStore";

import playSound from "../utils/playSound";

import { SOUND_FILENAMES } from "../constants/soundFilenames";

function PuzzleSlot({ piece }) {
  const updatePieceFilledStatus = usePuzzleStore(
    (state) => state.updatePieceFilledStatus
  );

  const [isFilled, setIsFilled] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PUZZLE_PIECES",
    drop: (item) => {
      if (item.id === piece.id) {
        playSound(SOUND_FILENAMES.CORRECT);
        setIsFilled(true);
        updatePieceFilledStatus(piece.id);
      } else {
        playSound(SOUND_FILENAMES.WRONG);
        setIsWrong(true);
        setTimeout(() => setIsWrong(false), 500);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <img
      ref={drop}
      src={piece.src}
      alt={`Puzzle slot for piece ${piece.id}`}
      className={`
        w-full h-full border-2 transition-all duration-300 ease-in-out
        ${
          isFilled
            ? "opacity-100 scale-105 border-green-500"
            : "opacity-10 scale-95"
        }
        ${isWrong ? "animate-shake" : ""}
        ${
          isOver && !isFilled
            ? "animate-border-pulse ring-4 ring-accent shadow-lg"
            : ""
        }
      `}
      style={{
        gridColumn: piece.correctX + 1,
        gridRow: piece.correctY + 1,
      }}
    />
  );
}

export default PuzzleSlot;
