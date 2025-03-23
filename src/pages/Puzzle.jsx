import React from "react";

import usePuzzleStore from "../store/usePuzzleStore";
import PuzzleInputContainer from "../components/PuzzleInputContainer";
import PuzzleGameContainer from "../components/PuzzleGameContainer";

function PuzzlePage() {
  const start = usePuzzleStore((state) => state.start);

  return (
    <div className="relative h-screen">
      <img
        src="/images/logo.png"
        className="absolute top-5 left-1/2 transform -translate-x-1/2 h-34"
      />

      <div className="flex flex-col items-center justify-center h-full gap-7">
        {start ? <PuzzleGameContainer /> : <PuzzleInputContainer />}
      </div>
    </div>
  );
}

export default PuzzlePage;
