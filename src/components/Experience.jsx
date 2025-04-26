import { workExperiences } from "../data";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <div className="py-16" id="testimonials">
      <h2 className="heading">
        My Work <span className="text-purple"> Experience</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 mx-auto mt-10 md:gap-10 md:py-20 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl md:grid-cols-2">
        {workExperiences.map((exp) => (
          <Button
            className=""
            duration={Math.floor(Math.random() * 10000) + 10000}
            key={exp.id}
          >
            <div className="flex flex-col gap-2 p-3 py-6 cursor-default lg:flex-row lg:items-center lg:p-10 md:p-5">
              <img
                src={exp.thumbnail}
                alt={exp.title}
                className="w-16 lg:w-32 md:w-20"
                loading="lazy"
              />
              <div className="lg:ms-5 text-start">
                <h1 className="text-xl font-bold md:text-2xl">{exp.title}</h1>
                <h3 className="text-sm md:text-base text-neutral-500">
                  {exp.company}
                </h3>
                <p className="mt-3 md:text-base text-neutral-300">{exp.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
