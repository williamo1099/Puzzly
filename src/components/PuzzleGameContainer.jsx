import usePuzzleStore from "../store/usePuzzleStore";
import PuzzlePiece from "./PuzzlePiece";

function PuzzleGameContainer() {
  const pieces = usePuzzleStore((state) => state.pieces);

  return (
    <div className="w-full h-full">
      {pieces.map((piece) => (
        <PuzzlePiece key={piece.id} piece={piece} />
      ))}
    </div>
  );
}

export default PuzzleGameContainer;
