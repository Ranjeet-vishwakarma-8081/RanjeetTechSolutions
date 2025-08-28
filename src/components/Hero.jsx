import { FaLocationArrow } from "react-icons/fa6";
import { cn } from "../lib/utils";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center h-screen pb-20 pt-36"
      id="home"
    >
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
            "[background-size:100px_100px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_0px,transparent_1px),linear-gradient(to_bottom,#262626_0px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex justify-center items-center flex-col">
          <h2 className="text-xs tracking-widest text-center uppercase dark:text-blue-100 ">
            Bringing Business Ideas to Life with Modern Web Tech
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-4xl lg:text-5xl xl:text-6xl"
            words="We develop websites that ignite your Business"
          />

          <p className="mb-4 text-sm text-center md:mb-14 md:tracking-wider md:text-lg lg:text-xl text-neutral-300 xl:text-2xl">
            Hi, I'm Ranjeet, a MERN Stack Developer based in Pune.
          </p>

          {/* Magic Button */}
          <a href="#services">
            <MagicButton
              title="Show our services"
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
