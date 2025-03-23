import ImagePreviewer from "../components/ImagePreviewer";
import ImageUploader from "../components/ImageUploader";
import LevelPicker from "../components/LevelPicker";

function PuzzlePage() {
  return (
    <div className="flex flex-col items-center gap-3">
      <ImageUploader />

      <ImagePreviewer />

      <LevelPicker />
    </div>
  );
}

export default PuzzlePage;
