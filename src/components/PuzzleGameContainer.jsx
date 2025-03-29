import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import usePuzzleStore from "../store/usePuzzleStore";
import PuzzlePiece from "./PuzzlePiece";
import PuzzleBoard from "./PuzzleBoard";
import Button from "./Button";

import usePuzzleGame from "../hooks/usePuzzleGame";

function PuzzleGameContainer() {
  const pieces = usePuzzleStore((state) => state.pieces);
  const reset = usePuzzleStore((state) => state.reset);

  const progress = usePuzzleGame();

  const handleClickReset = () => {
    reset();
  };

  if (pieces.length === 0) return;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center justify-center gap-7 h-full">
        {/* Progress */}
        {progress === 1 ? (
          <span className="text-2xl font-bold">
            Congratulations, you completed the puzzle!
          </span>
        ) : (
          <progress value={progress} className="w-full" />
        )}

        {/* Puzzle pieces */}
        {pieces.map((piece) => (
          <PuzzlePiece key={piece.id} piece={piece} />
        ))}

        {/* Puzzle board */}
        <PuzzleBoard />

        {/* Reset button */}
        <Button clickHandler={handleClickReset}>Reset</Button>
      </div>
    </DndProvider>
  );
}

export default PuzzleGameContainer;
