import { useState } from "react";
import { useDrop } from "react-dnd";
import usePuzzleStore from "../store/usePuzzleStore";

function PuzzleSlot({ piece }) {
  const updatePieceFilledStatus = usePuzzleStore(
    (state) => state.updatePieceFilledStatus
  );

  // eslint-disable-next-line no-unused-vars
  const [collectedProps, drop] = useDrop(() => ({
    accept: "PUZZLE_PIECES",
    drop: (item) => {
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
      className={`border ${isFilled ? "" : "opacity-5"} w-full h-full`}
      style={{
        gridColumn: piece.correctX + 1,
        gridRow: piece.correctY + 1,
      }}
    />
  );
}

export default PuzzleSlot;
