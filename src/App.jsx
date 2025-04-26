import { Routes, Route } from "react-router";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./data";
import Home from "./components/Home";

const App = () => {
  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto font-sans overflow-clip bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Routes>
          <Route path="/" element={<Home scrollTo="home" />} />
          <Route path="/services" element={<Home scrollTo="services" />} />
          <Route path="/projects" element={<Home scrollTo="projects" />} />
          <Route
            path="/testimonials"
            element={<Home scrollTo="testimonials" />}
          />
          <Route path="/contact" element={<Home scrollTo="contact" />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
