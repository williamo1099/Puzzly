import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PuzzlePage from "./pages/Puzzle";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-base font-roboto">
      <Router>
        <Routes>
          <Route path="/" element={<PuzzlePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
