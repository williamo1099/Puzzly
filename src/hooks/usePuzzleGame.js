import { useEffect } from "react";

import usePuzzleStore from "../store/usePuzzleStore";

import showConfirmationAlert from "../utils/showConfirmationAlert";

import playSound from "../utils/playSound";
import withClickSound from "../utils/withClickSound";

import { SOUND_FILENAMES } from "../constants/soundFilenames";

function usePuzzleGame() {
  const pieces = usePuzzleStore((state) => state.pieces);
  const status = usePuzzleStore((state) => state.status);
  const isTimeOver = usePuzzleStore((state) => state.isTimeOver);
  const setStatus = usePuzzleStore((state) => state.setStatus);
  const reset = usePuzzleStore((state) => state.reset);

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
    const progress = completedPiecesNumber / pieces.length;

    // Set status to win.
    if (progress === 1) {
      playSound(SOUND_FILENAMES.VICTORY);
      setStatus("win");
    }
  }, [pieces]);

  useEffect(() => {
    if (!isTimeOver) return;

    if (status === "win") return;

    // Play lose sound effect.
    playSound(SOUND_FILENAMES.LOSE);

    // Set status to lose.
    setStatus("lose");
  }, [isTimeOver]);

  return { handleResetButtonClick };
}

export default usePuzzleGame;
