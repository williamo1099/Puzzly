import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PuzzlePage from "./pages/Puzzle";
import AboutPage from "./pages/About";

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="relative w-screen h-screen flex justify-center items-center text-base font-roboto text-gray-500 bg-background">
      <Router>
        <Routes>
          <Route path="/" element={<PuzzlePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>

      <span className="absolute bottom-5 text-sm">
        © {year}{" "}
        <a
          className="underline text-primary"
          href="https://github.com/williamo1099"
        >
          William Oktavianus
        </a>
        . Licensed under the MIT License.
      </span>
    </div>
  );
}

export default App;
