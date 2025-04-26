import Hero from "./Hero";
import Services from "./Services";
import RecentProjects from "./RecentProjects";
import Testimonials from "./Testimonials";
import Experience from "./Experience";
import Approach from "./Approach";
import Contact from "./Contact";
import { useEffect } from "react";

const Home = ({ scrollTo }) => {
  useEffect(() => {
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);

  return (
    <div id="home">
      <Hero />
      <Services />
      <RecentProjects />
      <Testimonials />
      <Experience />
      <Approach />
      <Contact />
    </div>
  );
};

export default Home;
