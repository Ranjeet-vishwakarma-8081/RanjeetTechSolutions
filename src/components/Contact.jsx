import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "../data";

const Contact = () => {
  return (
    <footer className="pt-16 pb-8" id="contact">
      <div className="absolute left-0 w-full min-h-96 -bottom-72">
        <img
          src="/footer-grid.svg"
          alt="footer-grid"
          className="w-full h-full opacity-50"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading text-white lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presense to the next level?
        </h1>
        <p className="my-5 text-center text-neutral-200 md:mt-10">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
        <a href="mailto:ranjeetv.dev@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 mt-20 md:flex-row">
        <p className="text-sm font-light text-center text-neutral-200 w-60 md:text-base md:font-normal sm:w-auto">
          © {new Date().getFullYear()} RanjeetTechSolutions™. Modern Solutions
          for Digital Needs.
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((social) => (
            <div key={social.id}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={social.id}
                className="flex items-center justify-center bg-opacity-75 border border-white/[0.2] rounded-lg cursor-pointer size-10 size10 bg-black-100 backdrop-filter backdrop-blur-lg saturate-150"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
