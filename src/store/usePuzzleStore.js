import { create } from "zustand";

const usePuzzleStore = create((set) => ({
  uploadedImage: null,
  level: "easy",
  status: "playing",
  pieces: [],

  isGameStarted: false,
  isGamePaused: false,
  isTimeOver: false,
  duration: 0,

  setUploadedImage: (image) => set({ uploadedImage: image }),
  setLevel: (level) => set({ level: level }),
  setStatus: (status) => set({ status: status }),
  setPieces: (pieces) => set({ pieces: pieces }),
  setIsGameStarted: (isGameStarted) => set({ isGameStarted: isGameStarted }),
  setIsGamePaused: (isGamePaused) => set({ isGamePaused: isGamePaused }),
  setIsTimeOver: (isTimeOver) => set({ isTimeOver: isTimeOver }),
  setDuration: (duration) => set({ duration: duration }),

  reset: () => {
    set({
      uploadedImage: null,
      level: "easy",
      status: "playing",
      pieces: [],
      isGameStarted: false,
      isGamePaused: false,
      isTimeOver: false,
      duration: 0,
    });
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

  updatePieceFilledStatus: (pieceId) => {
    set((state) => ({
      pieces: state.pieces.map((piece) => {
        return piece.id === pieceId ? { ...piece, isFilled: true } : piece;
      }),
    }));
  },
}));

export default usePuzzleStore;
