import { useState } from "react";
import { useDrop } from "react-dnd";
import usePuzzleStore from "../store/usePuzzleStore";

function PuzzleSlot({ piece }) {
  const updatePieceFilledStatus = usePuzzleStore(
    (state) => state.updatePieceFilledStatus
  );

  const [collectedProps, drop] = useDrop(() => ({
    accept: "PUZZLE_PIECES",
    drop: (item, monitor) => {
      if (item.id === piece.id) {
        setIsFilled(true);
        updatePieceFilledStatus(piece.id);
      }
    },
  }));

  const [isFilled, setIsFilled] = useState(false);

  return (
    <img
      ref={drop}
      src={piece.src}
      alt="puzzle slot"
      className={`border ${isFilled ? "" : "opacity-5"}`}
      style={{
        position: "absolute",
        left: piece.correctX,
        top: piece.correctY,
        width: piece.width,
        height: piece.height,
      }}
    />
  );
}

export default PuzzleSlot;
