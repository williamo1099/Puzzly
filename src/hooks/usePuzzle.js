import { useEffect } from "react";

import gcd from "../utils/gcd";
import usePuzzleStore from "../store/usePuzzleStore";

function usePuzzle() {
  const uploadedImage = usePuzzleStore((state) => state.uploadedImage);
  const setPieces = usePuzzleStore((state) => state.setPieces);

  /**
   * Find an aspect ratio of an image.
   *
   * @param {*} image
   * @returns [width, height]
   */
  const findImageRatio = (image) => {
    const width = image.naturalWidth;
    const height = image.naturalHeight;

    const factor = gcd(width, height);

    return [width / factor, height / factor];
  };

  /**
   * Break an image into puzzle pieces.
   * Shout out to https://stackoverflow.com/a/8913024.
   *
   * @param {*} image
   * @param {int} n The constant difficulty number.
   * @returns
   */
  const breakImageIntoPuzzlePieces = (image, imageRatio, n = 50) => {
    if (!imageRatio[0] || !imageRatio[1]) return;

    const denominator = imageRatio[0] + imageRatio[1];

    // Calculate number of chunks.
    const horizontalN = Math.round(
      Math.sqrt((imageRatio[0] / denominator) * n)
    );
    const verticalN = Math.round(Math.sqrt((imageRatio[1] / denominator) * n));

    // Calculate piece dimensions.
    const pieceWidth = image.naturalWidth / horizontalN;
    const pieceHeight = image.naturalHeight / verticalN;

    let pieces = [];

    for (let row = 0; row < verticalN; row++) {
      for (let col = 0; col < horizontalN; col++) {
        let canvas = document.createElement("canvas");
        canvas.width = pieceWidth;
        canvas.height = pieceHeight;
        let context = canvas.getContext("2d");

        context.drawImage(
          image,
          col * pieceWidth,
          row * pieceHeight, // Crop from original image
          pieceWidth,
          pieceHeight, // Crop size
          0,
          0, // Draw position on new canvas
          canvas.width,
          canvas.height // Draw size
        );

        pieces.push({
          id: `${row}-${col}`,
          src: canvas.toDataURL(),
          correctX: col * pieceWidth,
          correctY: row * pieceHeight,
          currX: Math.random() * window.innerWidth, // Scatter randomly
          currY: Math.random() * window.innerHeight,
          width: pieceWidth,
          height: pieceHeight,
        });

        canvas = null;
      }
    }

    return pieces;
  };

  useEffect(() => {
    if (!uploadedImage) return;

    const image = new Image();
    image.src = uploadedImage;

    image.onload = () => {
      const ratio = findImageRatio(image);
      const pieces = breakImageIntoPuzzlePieces(image, ratio);

      setPieces(pieces);
    };
  }, [uploadedImage]);
}

export default usePuzzle;
