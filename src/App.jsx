import "./index.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Directions from "./pages/Directions/Directions";
import Doctors from "./pages/Doctors/Doctors.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/directions" element={<Directions />} />
      <Route path="/doctors" element={<Doctors />} />
    </Routes>
  );
}

export default App;
