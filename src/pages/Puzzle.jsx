import React from "react";
import Button from "../components/Button";
import ImageUploader from "../components/ImageUploader";
import LevelPicker from "../components/LevelPicker";

function PuzzlePage() {
  const handleClickStart = () => {
    alert("start");
  };

  return (
    <div className="relative h-screen">
      <img
        src="/images/logo.png"
        className="absolute top-5 left-1/2 transform -translate-x-1/2 h-34"
      />

      <div className="flex flex-col items-center justify-center h-full gap-7">
        <ImageUploader />
        <LevelPicker />
        <Button clickHandler={handleClickStart}>Start the Game</Button>
      </div>
    </div>
  );
}

export default PuzzlePage;
