import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const phoneNumber = "918081490641";
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
          // <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   viewBox="0 0 32 32"
          //   fill="currentColor"
          //   className="text-white size-6"
          // >
          //   <path d="M16.004 2.667c-7.355 0-13.333 5.978-13.333 13.333 0 2.355.617 4.649 1.788 6.675l-1.883 6.89 7.07-1.858a13.265 13.265 0 0 0 6.358 1.613h.001c7.354 0 13.332-5.978 13.332-13.333 0-3.556-1.384-6.9-3.896-9.413-2.513-2.513-5.857-3.908-9.437-3.907Zm0 2.666c2.914-.001 5.647 1.134 7.707 3.193 2.06 2.06 3.193 4.793 3.193 7.707 0 6.007-4.893 10.9-10.9 10.9a10.89 10.89 0 0 1-5.536-1.512l-.394-.239-4.142 1.09 1.101-4.028-.257-.414a10.86 10.86 0 0 1-1.675-5.796c0-6.007 4.893-10.9 10.9-10.9Zm-4.268 5.833c-.293 0-.586.011-.861.012-.226.001-.528.03-.787.277-.259.248-1.034 1.01-1.034 2.46 0 1.45 1.059 2.854 1.205 3.05.146.197 2.037 3.2 5.034 4.363 2.481.974 2.987.779 3.522.73.537-.049 1.732-.706 1.978-1.386.245-.68.245-1.263.172-1.386-.073-.122-.269-.197-.56-.345-.292-.149-1.731-.854-2.002-.951-.269-.098-.465-.148-.66.147-.197.293-.759.951-.929 1.146-.171.195-.342.22-.63.073-.292-.148-1.228-.452-2.34-1.442-.864-.771-1.447-1.722-1.618-2.015-.171-.293-.018-.451.13-.6.134-.133.293-.342.439-.512.146-.171.195-.293.292-.488.097-.195.048-.366-.024-.512-.073-.146-.657-1.583-.9-2.166-.244-.584-.488-.509-.732-.521Z" />
          // </svg>
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

// import { useState, useEffect } from "react";
// import { MessageCircle, X } from "lucide-react";

// const WhatsAppWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showWidget, setShowWidget] = useState(false);
//   const [shouldBounce, setShouldBounce] = useState(false);

//   const phoneNumber = "918081490641";
//   const message =
//     "Hi Ranjeet, I came across your site and I'd like to connect!";
//   const encodedMessage = encodeURIComponent(message);

//   const toggleWidget = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     // Appear after 5 seconds
//     const timer = setTimeout(() => {
//       setShowWidget(true);
//       // Start bouncing after 7 seconds
//       setTimeout(() => {
//         setShouldBounce(true);
//         // Stop bouncing after 1.5 second
//         setTimeout(() => {
//           setShouldBounce(false);
//         }, 1500);
//       }, 7000);
//     }, 5000);
//     // Cleanup function to clear the timer
//     return () => clearTimeout(timer);
//   }, []);

//   if (!showWidget) return null; // Hide until timer ends

//   return (
//     <>
//       {/* Floating WhatsApp Button */}
//       <button
//         onClick={toggleWidget}
//         className={`fixed z-50 p-4 transition-all duration-300 bg-green-500 rounded-full shadow-lg bottom-5 right-5 hover:bg-green-600 ${
//           shouldBounce && "animate-bounce"
//         }`}
//       >
//         {isOpen ? (
//           <X className="w-6 h-6 text-white" />
//         ) : (
//           <MessageCircle className="w-6 h-6 text-white" />
//         )}
//       </button>

//       {/* Chat Popup */}
//       {isOpen && (
//         <div className="fixed z-40 p-4 transition-all duration-300 bg-white shadow-xl bottom-20 right-5 w-72 rounded-xl animate-fade-in ">
//           <h3 className="mb-2 text-lg font-semibold">Chat with Ranjeet 💬</h3>
//           <p className="mb-4 text-gray-600">
//             Hi there! 👋 <br />
//             Need help? Let’s chat on WhatsApp!
//           </p>
//           <a
//             href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block py-2 font-semibold text-center text-white transition-colors duration-300 bg-green-500 rounded-md hover:bg-green-600"
//           >
//             Start Chat
//           </a>
//         </div>
//       )}
//     </>
//   );
// };

// export default WhatsAppWidget;
