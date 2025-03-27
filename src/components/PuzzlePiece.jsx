function PuzzlePiece({ piece }) {
  return (
    <img
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
