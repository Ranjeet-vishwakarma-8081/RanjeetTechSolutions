import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const phoneNumber = "917387496235";
  const message =
    "Hello Ranjeet, I recently visited your website and was impressed by your work. I would like to discuss a potential collaboration opportunity. Could we connect at your earliest convenience? Thank you.";

  const encodedMessage = encodeURIComponent(message);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const scrollPercentage = ((scrollTop + windowHeight) / fullHeight) * 100;

      if (scrollPercentage > 30 && !showWidget) {
        setShowWidget(true);

        setTimeout(() => {
          setIsVisible(true);
        }, 500);

        setTimeout(() => {
          setShouldBounce(true);
          setTimeout(() => {
            setShouldBounce(false);
          }, 1500);
        }, 7000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showWidget]); // depends on showWidget

  if (!showWidget) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={toggleWidget}
        className={`fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 ${
          shouldBounce && !isOpen ? "animate-bounce" : ""
        }
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      >
        {isOpen ? (
          <IoClose className="text-white size-6" />
        ) : (
          <FaWhatsapp className="text-white size-6" />
        )}
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed z-50 transition-all duration-300 shadow-xl w-72 bottom-20 right-5 animate-fade-in">
          <BackgroundBeamsWithCollision>
            <div className="p-4 bg-white rounded-xl ">
              <h3 className="mb-2 text-lg font-semibold">
                Chat with Ranjeet 💬
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Hello! 👋 <br />
                Have questions or collaboration ideas? Let’s connect on
                WhatsApp.
              </p>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 font-semibold text-center text-white transition-colors duration-300 bg-green-500 rounded-md hover:bg-green-600"
              >
                Start Chat
              </a>
            </div>
          </BackgroundBeamsWithCollision>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;
