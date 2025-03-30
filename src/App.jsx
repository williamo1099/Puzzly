import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PuzzlePage from "./pages/Puzzle";
import AboutPage from "./pages/About";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-base font-roboto">
      <Router>
        <Routes>
          <Route path="/" element={<PuzzlePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
