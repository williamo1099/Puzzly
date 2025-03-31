import { useEffect } from "react";

import usePuzzleStore from "../store/usePuzzleStore";

import playSound from "../utils/playSound";
import processImage from "../utils/processImage";
import showErrorAlert from "../utils/showErrorAlert";

import { SOUND_FILENAMES } from "../constants/soundFilenames";

function usePuzzleInput() {
  const uploadedImage = usePuzzleStore((state) => state.uploadedImage);
  const level = usePuzzleStore((state) => state.level);
  const setPieces = usePuzzleStore((state) => state.setPieces);
  const setStart = usePuzzleStore((state) => state.setStart);

  /**
   * Handle click event for button start.
   */
  const handleButtonStartClick = () => {
    // Check if image has been uploaded successfully.
    if (!uploadedImage) {
      showErrorAlert(
        "Oops...",
        "Please provide an image to start the game!",
        "OK"
      );
      return;
    }

    // Set start state to true.
    setStart(true);
  };

  /**
   * Handle click event for button info.
   */
  const handleButtonInfoClick = () => {
    // Play the click sound effect.
    playSound(SOUND_FILENAMES.CLICK);

    // Go to about page after 100ms.
    setTimeout(() => {
      window.location.href = "/about";
    }, 100);
  };

  useEffect(() => {
    if (!uploadedImage) return;

    let n = 50;
    if (level === "Medium") n = 100;
    if (level === "Hard") n = 200;

    processImage(uploadedImage, n)
      .then((pieces) => setPieces(pieces))
      .catch((error) => console.error("Error processing image:", error));
  }, [uploadedImage, level, setPieces]);

  return { handleButtonStartClick, handleButtonInfoClick };
}

export default usePuzzleInput;
