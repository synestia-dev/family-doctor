import "./index.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Directions from "./pages/Directions/Directions";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/directions" element={<Directions />} />
      <Route path="/direction" element={<Home />} />
    </Routes>
  );
}

export default App;
