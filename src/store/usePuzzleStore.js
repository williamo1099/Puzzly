import { create } from "zustand";

const usePuzzleStore = create((set) => ({
  uploadedImage: null,
  level: "easy",
  start: false,
  pieces: [],

  setUploadedImage: (image) => {
    set({ uploadedImage: image });
  },
  setLevel: (level) => {
    set({ level: level });
  },
  setStart: (start) => {
    set({ start: start });
  },
  setPieces: (pieces) => {
    set({ pieces: pieces });
  },

  updatePiecePosition: (pieceId, newX, newY) => {
    set((state) => ({
      pieces: state.pieces.map((piece) => {
        return piece.id === pieceId
          ? { ...piece, currX: newX, currY: newY }
          : piece;
      }),
    }));
  },
}));

export default usePuzzleStore;
