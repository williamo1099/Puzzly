import React from "react";

import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";

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
    <div className="relative flex flex-col items-center justify-center h-full w-full gap-7">
      {/* Info Button */}
      <a href="/about" className="absolute top-5 right-5">
        <InformationCircleIcon className="w-10 h-10 text-primary" />
      </a>

      {/* Image uploader */}
      <ImageUploader />

      {/* Level picker */}
      <LevelPicker />

      {/* Start button */}
      <Button
        disabled={!uploadedImage}
        clickHandler={handleClickStart}
        icon={PuzzlePieceIcon}
      >
        Start the Game
      </Button>
    </div>
  );
}

export default PuzzleInputContainer;
