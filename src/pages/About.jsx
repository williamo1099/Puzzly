// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { PuzzlePieceIcon } from "@heroicons/react/24/solid";

import withClickSound from "../utils/withClickSound";

import InfoButton from "../components/InfoButton";

function AboutPage() {
  const handleButtonInfoClick = withClickSound(() => {
    // Go to main page after 100ms.
    setTimeout(() => {
      window.location.href = "/";
    }, 100);
  });

  return (
    <motion.div
      initial={{
        left: -10,
        opacity: 0,
      }}
      animate={{
        left: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center w-full h-full gap-2"
    >
      {/* Info Button */}
      <InfoButton
        classNames="top-5 right-5"
        clickHandler={handleButtonInfoClick}
        icon={PuzzlePieceIcon}
      />

      {/* Title */}
      <h2 className="text-3xl font-bold">
        About <spa className="bg-primary text-black rounded px-2">Puzzly</spa>
      </h2>

      {/* Image */}
      <img src="/images/logo.png" className="h-1/6" />

      {/* Description */}
      <p className="text-center w-2/5">
        Puzzly is a game that turns any image into a puzzle. Inspired by a
        minigame from Call of Duty: Mobile, it was built in 2025 using React.
        Players can adjust the difficulty to match their skill level. Created
        just for fun, Puzzly offers a simple way to enjoy puzzles online. In the
        future, multiplayer support might be added.
      </p>

      {/* Credit */}
      <p className="text-sm mt-5">
        Made with ♥︎ by{" "}
        <a
          className="underline text-primary"
          href="https://github.com/williamo1099"
        >
          William Oktavianus
        </a>{" "}
        in Bandung
      </p>
    </motion.div>
  );
}

export default AboutPage;
