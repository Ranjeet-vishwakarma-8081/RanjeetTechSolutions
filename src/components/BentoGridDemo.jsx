import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { services } from "../data/index";

export function BentoGridDemo() {
  return (
    <div>
      <div className="flex items-center justify-center text-center dark:text-white">
        <div className="">
          <h2 className="pb-2 text-4xl font-bold ">
            What We <span className="text-purple-500">Excel At</span>
          </h2>
          <p className="text-lg tracking-tight opacity-95 ">
            Regardless of your industry, we understand your unique needs and
            deliver tailored solutions.
          </p>
        </div>
      </div>
      <BentoGrid className="max-w-5xl py-16 mx-auto md:py-20">
        {services.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
