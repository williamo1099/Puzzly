import { useCallback, useEffect } from "react";

import usePuzzleStore from "../store/usePuzzleStore";

import showConfirmationAlert from "../utils/showConfirmationAlert";

import playSound from "../utils/playSound";
import withClickSound from "../utils/withClickSound";

import { STATUSES } from "../constants/statuses";
import { SOUND_FILENAMES } from "../constants/soundFilenames";

function usePuzzleGame() {
  const pieces = usePuzzleStore((state) => state.pieces);
  const status = usePuzzleStore((state) => state.status);
  const isTimeOver = usePuzzleStore((state) => state.isTimeOver);
  const setStatus = usePuzzleStore((state) => state.setStatus);
  const reset = usePuzzleStore((state) => state.reset);

  /**
   * Set the game status to win.
   */
  const setStatusToWin = useCallback(() => {
    playSound(SOUND_FILENAMES.VICTORY);
    setStatus(STATUSES.WIN);
  }, [setStatus]);

  /**
   * Set the game status to lose.
   */
  const setStatusToLose = useCallback(() => {
    playSound(SOUND_FILENAMES.LOSE);
    setStatus(STATUSES.LOSE);
  }, [setStatus]);

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

  /**
   * Monitor the progress of the game.
   * If all slots are filled, set status to win.
   */
  useEffect(() => {
    const completedPiecesNumber = pieces.filter(
      (piece) => piece.isFilled
    ).length;
    const progress = completedPiecesNumber / pieces.length;

    // Set status to win.
    if (progress === 1) setStatusToWin();
  }, [pieces, setStatusToWin]);

  /**
   * Monitor the game timer.
   * If the time is over and status is not win yet, set status to lose.
   */
  useEffect(() => {
    if (!isTimeOver || status === STATUSES.WIN) return;

    // Set status to lose.
    setStatusToLose();
  }, [isTimeOver, status, setStatusToLose]);

  return { handleResetButtonClick };
}

export default usePuzzleGame;
