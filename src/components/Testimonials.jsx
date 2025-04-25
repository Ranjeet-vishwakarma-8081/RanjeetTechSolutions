import { testimonials } from "../data";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";

const Testimonials = () => {
  return (
    <div className="py-16" id="testimonials">
      <h2 className="heading">
        Trusted by Industry <span className="text-purple">Professionals</span>
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
