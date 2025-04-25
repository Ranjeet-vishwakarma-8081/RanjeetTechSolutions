import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, icon }) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border bg-white p-4 transition duration-200 hover:shadow-xl border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%) ",
      }}
    >
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="text-purple">{icon}</div>
        <div className="my-2 text-xl font-bold text-white md:text-2xl">
          {title}
        </div>
        <div className="text-base font-light tracking-tight text-neutral-300 lg:text-lg lg:font-normal">
          {description}
        </div>
      </div>
    </div>
  );
};
