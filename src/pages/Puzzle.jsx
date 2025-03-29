import React from "react";

import usePuzzleStore from "../store/usePuzzleStore";
import PuzzleInputContainer from "../components/PuzzleInputContainer";
import PuzzleGameContainer from "../components/PuzzleGameContainer";

function PuzzlePage() {
  const start = usePuzzleStore((state) => state.start);

  return start ? <PuzzleGameContainer /> : <PuzzleInputContainer />;
}

export default PuzzlePage;
