import React from "react";

import usePuzzleStore from "../store/usePuzzleStore";

import PuzzleInputContainer from "../components/PuzzleInputContainer";
import PuzzleGameContainer from "../components/PuzzleGameContainer";

function PuzzlePage() {
  const isGameStarted = usePuzzleStore((state) => state.isGameStarted);

  return isGameStarted ? <PuzzleGameContainer /> : <PuzzleInputContainer />;
}

export default PuzzlePage;
