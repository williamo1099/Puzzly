import { PuzzlePieceIcon } from "@heroicons/react/24/solid";

function AboutPage() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full gap-2">
      {/* Info Button */}
      <a href="/" className="absolute top-5 right-5">
        <PuzzlePieceIcon className="w-10 h-10 text-primary" />
      </a>

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
    </div>
  );
}

export default AboutPage;
