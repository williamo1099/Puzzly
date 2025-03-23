import usePuzzleStore from "../store/usePuzzleStore";

function ImagePreviewer() {
  const uploadedImage = usePuzzleStore((state) => state.uploadedImage);

  if (!uploadedImage) {
    return <>No image uploaded!</>;
  }

  return (
    <img
      src={uploadedImage}
      alt="Uploaded Puzzle Preview"
      className="max-w-full max-h-52 border border-gray-300 rounded-md"
    />
  );
}

export default ImagePreviewer;
