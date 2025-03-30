import usePuzzleStore from "../store/usePuzzleStore";
import PuzzlePiece from "./PuzzlePiece";
import PuzzleBoard from "./PuzzleBoard";
import Button from "./Button";

import usePuzzleGame from "../hooks/usePuzzleGame";
import { useDrop } from "react-dnd";

function PuzzleGameContainer() {
  const pieces = usePuzzleStore((state) => state.pieces);
  const reset = usePuzzleStore((state) => state.reset);
  const updatePiecePosition = usePuzzleStore(
    (state) => state.updatePiecePosition
  );

  const progress = usePuzzleGame();

  const [, drop] = useDrop(() => ({
    accept: "PUZZLE_PIECES",
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      if (!offset) return;

      updatePiecePosition(item.id, offset.x, offset.y);
      return undefined;
    },
  }));

  const handleClickReset = () => {
    reset();
  };

  if (pieces.length === 0) return;

  return (
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
      <div
        ref={drop}
        className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-7"
      >
        {pieces.map((piece) => (
          <PuzzlePiece key={piece.id} piece={piece} />
        ))}
      </div>

      {/* Puzzle board */}
      <PuzzleBoard />

      {/* Reset button */}
      <Button clickHandler={handleClickReset}>Reset</Button>
    </div>
  );
}

export default PuzzleGameContainer;
