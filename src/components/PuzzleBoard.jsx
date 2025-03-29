import PuzzleSlot from "./PuzzleSlot";

import usePuzzleStore from "../store/usePuzzleStore";

function PuzzleBoard() {
  const pieces = usePuzzleStore((state) => state.pieces);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-fit h-fit grid">
        {pieces.map((piece) => (
          <PuzzleSlot key={piece.id} piece={piece} />
        ))}
      </div>
    </div>
  );
}

export default PuzzleBoard;
