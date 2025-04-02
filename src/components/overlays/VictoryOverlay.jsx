import { ArrowPathIcon } from "@heroicons/react/24/solid";

import Overlay from "./Overlay";
import Button from "../Button";

function VictoryOverlay({ resetButtonClickHandler }) {
  return (
    <Overlay classNames="bg-green-500/75">
      <h1 className="text-4xl font-bold text-green-950">You Win!</h1>

      <Button
        clickHandler={resetButtonClickHandler}
        classNames="!bg-green-800 text-white px-4 py-2 rounded-md"
        icon={ArrowPathIcon}
      >
        Reset
      </Button>
    </Overlay>
  );
}

export default VictoryOverlay;
