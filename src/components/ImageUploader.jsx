import usePuzzleStore from "../store/usePuzzleStore";

function ImageUploader() {
  const setUploadedImage = usePuzzleStore((state) => state.setUploadedImage);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);
    }
  };

  return (
    <div>
      <label
        htmlFor="file-upload"
        className="bg-primary text-black text-lg font-bold p-3 rounded cursor-pointer"
      >
        Upload Image
      </label>

      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default ImageUploader;
