import "./index.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Directions from "./pages/Directions/Directions";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/directions" element={<Directions />} />
    </Routes>
  );
}

export default App;
