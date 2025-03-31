import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import usePuzzleStore from "../store/usePuzzleStore";

import { IMAGE_MESSAGES } from "../constants/imageMessages";

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
    <motion.div
      className="flex flex-col items-center gap-1"
      initial={{
        scale: 0.9,
        rotate: 5,
      }}
      animate={{
        scale: 1,
        rotate: 0,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <label
        htmlFor="file-upload"
        className={`max-h-64 ${
          !uploadedImage && "w-64 h-64"
        } border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer`}
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
          onChange={handleFileChange}
        />
      </label>

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
    </motion.div>
  );
}

export default ImageUploader;
