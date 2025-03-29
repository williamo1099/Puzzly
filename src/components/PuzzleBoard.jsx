import PuzzleSlot from "./PuzzleSlot";

import usePuzzleStore from "../store/usePuzzleStore";

function PuzzleBoard() {
  const pieces = usePuzzleStore((state) => state.pieces);

  return (
    <div className="w-fit h-fit grid border-4">
      {pieces.map((piece) => (
        <PuzzleSlot key={piece.id} piece={piece} />
      ))}
    </div>
  );
}

export default PuzzleBoard;
