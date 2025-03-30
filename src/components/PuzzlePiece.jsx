import { useDrag } from "react-dnd";

function PuzzlePiece({ piece }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PUZZLE_PIECES",
    item: piece,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  if (isDragging) {
    return <div className="absolute" ref={drag} />;
  }

  if (piece.isFilled) return null;

  return (
    <img
      ref={drag}
      src={piece.src}
      alt="puzzle piece"
      className="border cursor-move z-50"
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
