import { FaHome } from "react-icons/fa";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { BentoGridDemo } from "./components/BentoGridDemo";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "./data";

const App = () => {
  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-hidden bg-black-100 sm:px-10 ">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <BentoGridDemo />
        <RecentProjects />
      </div>
    </main>
  );
};

export default App;
