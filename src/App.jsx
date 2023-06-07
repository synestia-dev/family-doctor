import "./index.css";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Directions from "./pages/Directions/Directions";
import Doctors from "./pages/Doctors/Doctors";
import Doctor from "./pages/Doctor/Doctor";
import About from "./pages/About/About";
import ForCompanies from "./pages/ForCompanies/ForCompanies";
import News from "./pages/News/News";
import OneNews from "./pages/OneNews/OneNews";
import Contact from "./pages/Contact/Contact";
import OneDirection from "./pages/OneDirection/OneDirection.jsx";
import Form from "./pages/Form/Form.jsx";
import Photogallery from "./pages/Photogallery/Photogallery.jsx";
function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/directions" element={<Directions />} />
      <Route path="/directions/:id" element={<OneDirection />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<Doctor />} />
      <Route path="/about" element={<About />} />
      <Route path="/for-companies" element={<ForCompanies />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<OneNews />} />
      <Route path="/photogallery" element={<Photogallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
