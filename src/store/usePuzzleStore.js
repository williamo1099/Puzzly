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
}));

export default usePuzzleStore;
