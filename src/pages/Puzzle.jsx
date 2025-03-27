import React from "react";

import usePuzzleStore from "../store/usePuzzleStore";
import PuzzleInputContainer from "../components/PuzzleInputContainer";
import PuzzleGameContainer from "../components/PuzzleGameContainer";
import usePuzzle from "../hooks/usePuzzle";

function PuzzlePage() {
  const start = usePuzzleStore((state) => state.start);

  usePuzzle();

  return start ? <PuzzleGameContainer /> : <PuzzleInputContainer />;
}

export default PuzzlePage;
