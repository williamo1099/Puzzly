import { useEffect } from "react";

import usePuzzleStore from "../store/usePuzzleStore";

import processImage from "../utils/processImage";
import showErrorAlert from "../utils/showErrorAlert";

import playSound from "../utils/playSound";
import withClickSound from "../utils/withClickSound";

import { SOUND_FILENAMES } from "../constants/soundFilenames";

function usePuzzleInput() {
  const uploadedImage = usePuzzleStore((state) => state.uploadedImage);
  const level = usePuzzleStore((state) => state.level);
  const pieces = usePuzzleStore((state) => state.pieces);
  const setUploadedImage = usePuzzleStore((state) => state.setUploadedImage);
  const setLevel = usePuzzleStore((state) => state.setLevel);
  const setPieces = usePuzzleStore((state) => state.setPieces);
  const setIsGameStarted = usePuzzleStore((state) => state.setIsGameStarted);
  const setDuration = usePuzzleStore((state) => state.setDuration);

  /**
   * Handle click event for button start.
   */
  const handleButtonStartClick = withClickSound(() => {
    // Check if image has been uploaded successfully.
    if (!uploadedImage) {
      showErrorAlert(
        "Oops...",
        "Please provide an image to start the game!",
        "OK"
      );
      return;
    }

    // Set time duration.
    const duration = pieces.length * 10;
    setDuration(duration);

    // Set start state to true.
    setIsGameStarted(true);
  });

  /**
   * Handle click event for button info.
   */
  const handleButtonInfoClick = withClickSound(() => {
    // Go to about page after 100ms.
    setTimeout(() => {
      window.location.href = "/about";
    }, 100);
  });

  useEffect(() => {
    if (!uploadedImage) return;

    let n = 50;
    if (level === "Medium") n = 100;
    if (level === "Hard") n = 200;

    processImage(uploadedImage, n)
      .then((pieces) => setPieces(pieces))
      .catch((error) => console.error("Error processing image:", error));
  }, [uploadedImage, level, setPieces]);

  /**
   * Handle change event for image uploader.
   * @param {*} event
   */
  const handleUploadFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);

      // Play success sound.
      playSound(SOUND_FILENAMES.SUCCESS);
    }
  };

  /**
   * Handle change event for level picker.
   * @param {*} level
   */
  const handleLevelChange = (level) => {
    playSound(SOUND_FILENAMES.MOVE);
    setLevel(level);
  };

  return {
    handleButtonStartClick,
    handleButtonInfoClick,
    handleUploadFileChange,
    handleLevelChange,
  };
}

export default usePuzzleInput;
