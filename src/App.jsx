import { FaHome } from "react-icons/fa";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { Services } from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "./data";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto font-sans overflow-clip bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Services />
        <RecentProjects />
        <Testimonials />
        <Experience />
        <Approach />
        <Contact />
      </div>
    </main>
  );
};

export default App;
