import { useDrag } from "react-dnd";

import usePuzzleStore from "../store/usePuzzleStore";

function PuzzlePiece({ piece }) {
  const updatePiecePosition = usePuzzleStore(
    (state) => state.updatePiecePosition
  );

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "PUZZLE_PIECES",
    item: { id: piece.id },
    end: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      if (!offset) return;

      updatePiecePosition(piece.id, offset.x, offset.y);
    },
  }));

  if (piece.isFilled) return null;

  return (
    <img
      ref={collected.isDragging ? dragPreview : drag}
      {...collected}
      src={piece.src}
      alt="puzzle piece"
      className="border"
      style={{
        position: "absolute",
        left: piece.currX,
        top: piece.currY,
        width: piece.width,
        height: piece.height,
      }}
    />
  );
}

export default PuzzlePiece;
