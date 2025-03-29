import React from "react";

import ImageUploader from "./ImageUploader";
import LevelPicker from "./LevelPicker";
import Button from "./Button";

import usePuzzleInput from "../hooks/usePuzzleInput";
import usePuzzleStore from "../store/usePuzzleStore";

function PuzzleInputContainer() {
  const uploadedImage = usePuzzleStore((state) => state.uploadedImage);
  const setStart = usePuzzleStore((state) => state.setStart);

  usePuzzleInput();

  const handleClickStart = () => {
    if (!uploadedImage) {
      alert("Please provide the image to start the game!");
      return;
    }

    // Set start state to true.
    setStart(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-7">
      {/* Image uploader */}
      <ImageUploader />

      {/* Level picker */}
      <LevelPicker />

      {/* Start button */}
      <Button disabled={!uploadedImage} clickHandler={handleClickStart}>
        Start the Game
      </Button>
    </div>
  );
}

export default PuzzleInputContainer;
