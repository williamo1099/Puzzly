import { useDrop } from "react-dnd";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

import usePuzzleStore from "../store/usePuzzleStore";

import usePuzzleGame from "../hooks/usePuzzleGame";

import PuzzlePiece from "./PuzzlePiece";
import PuzzleBoard from "./PuzzleBoard";
import Timer from "./Timer";
import Button from "./Button";
import GameOverOverlay from "./GameOverOverlay";
import VictoryOverlay from "./VictoryOverlay";

import { STATUSES } from "../constants/statuses";

function PuzzleGameContainer() {
  const pieces = usePuzzleStore((state) => state.pieces);
  const status = usePuzzleStore((state) => state.status);
  const updatePiecePosition = usePuzzleStore(
    (state) => state.updatePiecePosition
  );

  const { handleResetButtonClick } = usePuzzleGame();

  const [, drop] = useDrop(() => ({
    accept: "PUZZLE_PIECES",
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      if (!offset) return;

      if (
        offset.x < 0 ||
        offset.y < 0 ||
        offset.x > window.innerWidth - item.pieceWidth ||
        offset.y > window.innerHeight - item.pieceHeight
      ) {
        return;
      }

      updatePiecePosition(item.id, offset.x, offset.y);
      return undefined;
    },
  }));

  if (pieces.length === 0) return;

  return (
    <div className="flex flex-col items-center justify-center gap-7 h-full">
      {/* Progress */}
      <Timer />

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
      <Button
        clickHandler={handleResetButtonClick}
        classNames="z-20"
        icon={ArrowPathIcon}
      >
        Reset
      </Button>

      {status === STATUSES.LOSE && (
        <GameOverOverlay resetButtonClickHandler={handleResetButtonClick} />
      )}
      {status === STATUSES.WIN && (
        <VictoryOverlay resetButtonClickHandler={handleResetButtonClick} />
      )}
    </div>
  );
}

export default PuzzleGameContainer;
