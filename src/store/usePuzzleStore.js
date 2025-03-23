import { create } from "zustand";

const usePuzzleStore = create((set) => ({
  uploadedImage: null,
  level: "easy",

  setUploadedImage: (image) => {
    set({ uploadedImage: image });
  },
  setLevel: (level) => {
    set({ level: level });
  },
}));

export default usePuzzleStore;
