import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Vortex } from "./components/ui/Vortex";

function App() {
  return (
    <Vortex
      backgroundColor="black"
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/hero" />} />
            <Route path="hero" element={<Hero />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skills" element={<Skills />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Vortex>
  );
}

export default App;
