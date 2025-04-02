import { useEffect, useState } from "react";

import usePuzzleStore from "../store/usePuzzleStore";

import showConfirmationAlert from "../utils/showConfirmationAlert";

import playSound from "../utils/playSound";
import withClickSound from "../utils/withClickSound";

import { SOUND_FILENAMES } from "../constants/soundFilenames";

function usePuzzleGame() {
  const pieces = usePuzzleStore((state) => state.pieces);
  const isTimeOver = usePuzzleStore((state) => state.isTimeOver);
  const setStatus = usePuzzleStore((state) => state.setStatus);
  const reset = usePuzzleStore((state) => state.reset);

  const [progress, setProgress] = useState(0);

  /**
   * Handle click event for reset button.
   */
  const handleResetButtonClick = withClickSound(() => {
    showConfirmationAlert(
      "Are you sure you want to reset?",
      "Your progress will be lost. Do you want to continue?",
      "Yes!",
      "Cancel",
      reset
    );
  });

  useEffect(() => {
    const completedPiecesNumber = pieces.filter(
      (piece) => piece.isFilled
    ).length;
    const newProgress = completedPiecesNumber / pieces.length;
    setProgress(newProgress);

    // Set status to win.
    if (progress === 1) {
      setStatus("win");
    }
  }, [pieces]);

  useEffect(() => {
    //
    if (!isTimeOver) return;

    // Play lose sound effect.
    playSound(SOUND_FILENAMES.LOSE);

    // Set status to lose.
    setStatus("lose");
  }, [isTimeOver]);

  return { handleResetButtonClick, progress };
}

export default usePuzzleGame;
