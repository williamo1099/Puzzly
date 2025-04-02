import { useState } from "react";
import { useDrag } from "react-dnd";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function PuzzlePiece({ piece }) {
  const [hasMoved, setHasMoved] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PUZZLE_PIECES",
    item: piece,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: () => setHasMoved(true),
  }));

  if (isDragging) {
    return <div className="absolute" ref={drag} />;
  }

  if (piece.isFilled) return null;

  return (
    <motion.div
      ref={drag}
      className="cursor-move z-40"
      style={{
        position: "absolute",
        width: piece.width,
        height: piece.height,
        left: piece.currX,
        top: piece.currY,
      }}
      initial={
        !hasMoved
          ? {
              left: window.innerWidth / 2 - piece.width / 2,
              top: window.innerHeight / 2 - piece.height / 2,
              opacity: 0,
              scale: 0.5,
              rotate: -10,
            }
          : {}
      }
      animate={
        !hasMoved
          ? {
              left: piece.currX,
              top: piece.currY,
              opacity: 1,
              scale: 1,
              rotate: 0,
            }
          : {}
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 1, rotate: -5 }}
    >
      <img
        src={piece.src}
        alt="puzzle piece"
        className="border"
        style={{ width: "100%", height: "100%" }} // Ensures correct scaling
      />
    </motion.div>
  );
}

export default PuzzlePiece;
