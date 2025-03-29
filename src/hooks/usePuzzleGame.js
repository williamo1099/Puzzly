import { useEffect, useState } from "react";

import usePuzzleStore from "../store/usePuzzleStore";

function usePuzzleGame() {
  const pieces = usePuzzleStore((state) => state.pieces);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedPiecesNumber = pieces.filter(
      (piece) => piece.isFilled
    ).length;
    const newProgress = completedPiecesNumber / pieces.length;
    setProgress(newProgress);
  }, [pieces]);

  return progress;
}

export default usePuzzleGame;
