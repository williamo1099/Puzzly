// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import usePuzzleStore from "../store/usePuzzleStore";

import PuzzleSlot from "./PuzzleSlot";

function PuzzleBoard() {
  const pieces = usePuzzleStore((state) => state.pieces);

  return (
    <motion.div
      className="w-fit h-fit grid border-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {pieces.map((piece) => (
        <PuzzleSlot key={piece.id} piece={piece} />
      ))}
    </motion.div>
  );
}

export default PuzzleBoard;
