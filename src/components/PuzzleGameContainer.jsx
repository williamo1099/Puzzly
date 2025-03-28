import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import usePuzzleStore from "../store/usePuzzleStore";
import PuzzlePiece from "./PuzzlePiece";
import PuzzleBoard from "./PuzzleBoard";

function PuzzleGameContainer() {
  const pieces = usePuzzleStore((state) => state.pieces);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full h-full">
        {pieces.map((piece) => (
          <PuzzlePiece key={piece.id} piece={piece} />
        ))}

        <PuzzleBoard />
      </div>
    </DndProvider>
  );
}

export default PuzzleGameContainer;
