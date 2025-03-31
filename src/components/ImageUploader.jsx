import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import usePuzzleStore from "../store/usePuzzleStore";

import playSound from "../utils/playSound";

import { IMAGE_MESSAGES } from "../constants/imageMessages";
import { SOUND_FILENAMES } from "../constants/soundFilenames";

function ImageUploader() {
  const uploadedImage = usePuzzleStore((state) => state.uploadedImage);
  const setUploadedImage = usePuzzleStore((state) => state.setUploadedImage);

  const [imageMessage, setImageMessage] = useState("");

  const getRandomMessage = () => {
    return IMAGE_MESSAGES[Math.floor(Math.random() * IMAGE_MESSAGES.length)];
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);

      setImageMessage(getRandomMessage());
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <motion.div
        className="flex flex-col items-center"
        initial={{
          scale: 0.9,
          rotate: 5,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <label
          htmlFor="file-upload"
          className={`max-h-64 ${
            !uploadedImage && "w-64 h-64 border-dashed"
          } border-2 border-gray-400 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer`}
        >
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-500">
              Click to Upload Your Image
            </div>
          )}

          {/* Image input */}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onClick={() => {
              playSound(SOUND_FILENAMES.CLICK);
            }}
            onChange={handleFileChange}
          />
        </label>
      </motion.div>

      {/* Success message */}
      <motion.span
        className="text-gray-500"
        initial={{
          opacity: 0.5,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {imageMessage}
      </motion.span>
    </div>
  );
}

export default ImageUploader;
