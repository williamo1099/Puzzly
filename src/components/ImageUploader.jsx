import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

import usePuzzleStore from "../store/usePuzzleStore";

import withClickSound from "../utils/withClickSound";

import { IMAGE_MESSAGES } from "../constants/imageMessages";

function ImageUploader({ fileChangeHandler }) {
  const uploadedImage = usePuzzleStore((state) => state.uploadedImage);

  const [showCheckmark, setShowCheckmark] = useState(false);
  const [imageMessage, setImageMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowCheckmark(true);
    }, 1000);
  }, [uploadedImage]);

  const handleUploadFileChange = (event) => {
    fileChangeHandler(event);

    // Reset checkmark show state.
    setShowCheckmark(false);

    // Set random message.
    setImageMessage(
      IMAGE_MESSAGES[Math.floor(Math.random() * IMAGE_MESSAGES.length)]
    );
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
            <>
              <img
                src={uploadedImage}
                alt="Uploaded"
                className={`object-cover w-full h-full ${
                  !showCheckmark && "opacity-80"
                }`}
              />

              <AnimatePresence>
                {!showCheckmark && (
                  <motion.div
                    className="absolute rounded-full p-1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <CheckCircleIcon className="w-28 h-28 text-green-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
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
            onClick={withClickSound()}
            onChange={handleUploadFileChange}
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
