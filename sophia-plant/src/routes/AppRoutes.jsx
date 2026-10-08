import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout"

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Experiences from "../pages/Experiences";
import Contact from "../pages/Contact";
import Greenhouse from "../pages/Greenhouse";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/experiencias" element={<Experiences />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/estufa" element={<Greenhouse />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;