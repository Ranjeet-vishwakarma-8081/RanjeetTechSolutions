import { useState } from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { AnimatePresence, motion } from "motion/react";

const Approach = () => {
  return (
    <div className="py-16" id="approach">
      <h2 className="heading">
        My Development <span className="text-purple">Philosophy</span>
      </h2>
      <div className="mx-auto mt-10 md:py-20 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
          {/* Card -1 */}
          <Card
            title="Planning and Strategy"
            icon={<AceternityIcon order="Phase 1" />}
            description="I believe in a well-structured approach to development. I start by understanding the project requirements, defining clear goals, and creating a roadmap to ensure a smooth development process."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
            />
          </Card>

          {/* Card -2 */}
          <Card
            title="Development and Progress Update"
            icon={<AceternityIcon order="Phase 2" />}
            description="I follow an iterative development process, breaking down the project into manageable tasks. Regular progress updates keep everyone informed and aligned with the project's goals."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
              colors={[
                [255, 166, 158],
                [221, 155, 247],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
          </Card>

          {/* Card -3 */}
          <Card
            title="Test & Launch"
            icon={<AceternityIcon order="Phase 3" />}
            description="Thorough testing is crucial to ensure the quality and reliability of the product. I conduct various tests, including unit tests, integration tests, and user acceptance tests, before launching the final product."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Approach;

const Card = ({ title, icon, children, description }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute text-white size-6 opacity-30 -top-3 -left-3" />
      <Icon className="absolute text-white size-6 opacity-30 -bottom-3 -left-3" />
      <Icon className="absolute text-white size-6 opacity-30 -top-3 -right-3" />
      <Icon className="absolute text-white size-6 opacity-30 -bottom-3 -right-3" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="flex items-center justify-center w-full mx-auto text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-3xl font-bold text-center transition duration-200 opacity-0 dark:text-white group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 ">
          {title}
        </h2>
        <h2
          className="relative z-10 mt-4 text-sm text-center text-white transition duration-200 opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex items-center justify-center w-full h-full px-5 py-2 text-2xl font-bold rounded-full cursor-pointer text-purple bg-slate-950 backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
