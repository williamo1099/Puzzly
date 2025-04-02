import { ArrowPathIcon } from "@heroicons/react/24/solid";

import Overlay from "./Overlay";
import Button from "../Button";

function GameOverOverlay({ resetButtonClickHandler }) {
  return (
    <Overlay classNames="bg-red-500/75">
      {/* Title */}
      <h1 className="text-4xl font-bold text-red-950">You Lose!</h1>

      {/* Reset button */}
      <Button
        clickHandler={resetButtonClickHandler}
        classNames="!bg-red-800 text-white px-4 py-2 rounded-md"
        icon={ArrowPathIcon}
      >
        Reset
      </Button>
    </Overlay>
  );
}

export default GameOverOverlay;
