import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../data";
import { PinContainer } from "./ui/PinContainer";
import { FiLoader, FiDownload } from "react-icons/fi";
import MagicButton from "./ui/MagicButton";

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 2;

const RecentProjects = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);

  const hasMoreProjects = visibleCount < projects.length;

  const handleLoadMoreProjects = () => {
    setIsLoadingProjects(true);

    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + LOAD_MORE_COUNT, projects.length),
      );
      setIsLoadingProjects(false);
    }, 600);
  };

  return (
    <div className="py-16" id="projects">
      <h2 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-10 mt-10 lg:gap-x-24 lg:gap-y-20 2xl:gap-y-10 md:py-20">
        {projects
          .slice(0, visibleCount)
          .map(({ id, title, link, description, img, iconLists }) => (
            <div
              key={id}
              className="flex items-center justify-center w-[80vw] sm:w-[500px] 2xl:w-[570px] sm:h-[27rem] 2xl:h-[40rem]"
            >
              <PinContainer title={link} href={link}>
                <div className="mb-10 overflow-hidden relative flex justify-center items-center sm:w-[500px] 2xl:w-[570px] w-[80vw] h-[30vh] sm:h-[40vh]">
                  <div className="relative w-full h-full overflow-hidden bg-[#13162d] rounded-3xl">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="absolute top-0 z-10 w-4/5 rounded-3xl rotate-3"
                    loading="lazy"
                  />
                </div>

                <h1 className="text-xl font-bold text-white md:text-2xl line-clamp-1">
                  {title}
                </h1>

                <p className="text-base font-light tracking-tight text-neutral-300 line-clamp-3 lg:text-lg lg:font-normal">
                  {description}
                </p>

                <div className="flex justify-between mt-7">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full size-6 lg:size-10 flex items-center justify-center bg-black"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img src={icon} alt={icon} loading="lazy" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <p className="text-sm lg:text-xl font-medium text-[#CBACF9]">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
      </div>

      {/* Show More Button */}
      {hasMoreProjects && (
        <div className="flex items-center justify-center">
          <MagicButton
            title={
              isLoadingProjects ? "Loading projects..." : "Show more projects"
            }
            icon={
              isLoadingProjects ? (
                <FiLoader className="animate-spin" />
              ) : (
                <FiDownload />
              )
            }
            position="right"
            handleClick={handleLoadMoreProjects}
            disabled={isLoadingProjects}
          />
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
