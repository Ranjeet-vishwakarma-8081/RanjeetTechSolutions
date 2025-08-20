import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { services } from "../data/index";

function Services() {
  return (
    <div id="services" className="py-16">
      <div className="flex items-center justify-center text-center dark:text-white">
        <div className="">
          <h2 className="heading">
            Our <span className="text-purple">Services</span>
          </h2>
          <p className="pt-2 text-sm lg:text-lg text-neutral-300">
            Regardless of your industry, we understand your unique needs and
            deliver tailored solutions.
          </p>
        </div>
      </div>
      <BentoGrid className="mx-auto mt-10 md:py-20 lg:max-w-5xl 2xl:max-w-7xl xl:max-w-6xl">
        {services.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            className={i === 3 || i === 6 ? "lg:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

export default Services;