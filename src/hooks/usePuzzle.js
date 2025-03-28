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
   * Scale down an image.
   *
   * @param {*} image
   * @param {*} maxSize The maximum size of an image.
   */
  const scaleImage = (image, maxSize = 500) => {
    const aspectRatio = image.naturalWidth / image.naturalHeight;

    let newWidth, newHeight;
    if (image.naturalWidth > image.naturalHeight) {
      // For horizontal image.
      newWidth = maxSize;
      newHeight = maxSize / aspectRatio;
    } else {
      // For vertical image.
      newHeight = maxSize;
      newWidth = maxSize * aspectRatio;
    }

    // Draw the scaled down image.
    const canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, newWidth, newHeight);
    const scaledImage = new Image();
    scaledImage.src = canvas.toDataURL();

    return new Promise((resolve) => {
      scaledImage.onload = () => resolve(scaledImage);
    });
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

    image.onload = async () => {
      const scaledImage = await scaleImage(image);
      const ratio = findImageRatio(scaledImage);
      const pieces = breakImageIntoPuzzlePieces(scaledImage, ratio);

      setPieces(pieces);
    };
  }, [uploadedImage]);
}

export default usePuzzle;
