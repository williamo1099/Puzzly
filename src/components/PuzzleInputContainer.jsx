import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";

import usePuzzleInput from "../hooks/usePuzzleInput";

import ImageUploader from "./ImageUploader";
import LevelPicker from "./LevelPicker";
import Button from "./Button";
import InfoButton from "./InfoButton";

function PuzzleInputContainer() {
  const { handleButtonStartClick, handleButtonInfoClick } = usePuzzleInput();

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full gap-7">
      {/* Info Button */}
      <InfoButton
        classNames="top-5 right-5"
        clickHandler={handleButtonInfoClick}
        icon={InformationCircleIcon}
      />

      {/* Image uploader */}
      <ImageUploader />

      {/* Level picker */}
      <LevelPicker />

      {/* Start button */}
      <Button clickHandler={handleButtonStartClick} icon={PuzzlePieceIcon}>
        Start the Game
      </Button>
    </div>
  );
}

export default PuzzleInputContainer;
