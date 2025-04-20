import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { services } from "../data/index";

export function BentoGridDemo() {
  return (
    <div id="services" className="py-16">
      <div className="flex items-center justify-center text-center dark:text-white">
        <div className="">
          <h2 className="pb-2 text-4xl font-bold ">
            Our <span className="text-purple-500">Services</span>
          </h2>
          <p className="text-sm tracking-tighter lg:text-lg">
            Regardless of your industry, we understand your unique needs and
            deliver tailored solutions.
          </p>
        </div>
      </div>
      <BentoGrid className="mx-auto mt-10 lg:max-w-5xl 2xl:max-w-7xl xl:max-w-6xl">
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
