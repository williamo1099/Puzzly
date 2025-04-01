import { useEffect, useState } from "react";

import usePuzzleStore from "../store/usePuzzleStore";

import showConfirmationAlert from "../utils/showConfirmationAlert";

import withClickSound from "../utils/withClickSound";

function usePuzzleGame() {
  const pieces = usePuzzleStore((state) => state.pieces);
  const reset = usePuzzleStore((state) => state.reset);

  const [progress, setProgress] = useState(0);

  /**
   *
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
  }, [pieces]);

  return { handleResetButtonClick, progress };
}

export default usePuzzleGame;
