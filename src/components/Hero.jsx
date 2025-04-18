import { FaLocationArrow } from "react-icons/fa6";
import { cn } from "../lib/utils";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        {/* First spotlight is original */}
        {/* <Spotlight
          className="left-0 h-screen -top-40 md:left-60 md:-top-20"
          fill="white"
        /> */}
        <Spotlight
          className="h-screen -top-40 -left-10 md:-top-20 md:-left-32"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-white dark:bg-black-100 ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex justify-center items-center flex-col">
          <h2 className="text-xs tracking-widest text-center uppercase dark:text-blue-100 max-w-80">
            Dynamic Web Magic with React.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="We develop website that ignite your Businesses"
          />

          <p className="mb-4 text-sm text-center dark:text-white md:tracking-wider md:text-lg lg:text-2xl">
            Hi, I'm Ranjeet, a MERN Stack Developer based in Pune.
          </p>

          {/* Magic Button */}
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
