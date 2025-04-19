import {
  FaLaptopCode,
  FaComments,
  FaPalette,
  FaUserShield,
  FaRocket,
  FaCloudUploadAlt,
  FaProjectDiagram,
  FaCode,
  FaWpforms,
  FaServer,
} from "react-icons/fa";

export const services = [
  {
    title: "Full-Stack Web App Development (MERN)",
    description:
      "Build end-to-end web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with responsive UIs, structured backend, and scalable architecture. Each project is optimized for performance and maintainability.",
    icon: <FaLaptopCode className="text-purple-500 size-6" />,
  },
  {
    title: "Real-Time Chat & Notification Systems	",
    description:
      "Develop real-time communication platforms using Socket.IO with features like live messaging, typing indicators, active status, and instant push notifications to enhance user engagement and interactivity.",
    icon: <FaComments className="text-purple-500 size-6" />,
  },
  {
    title: "Modern UI/UX with Tailwind & Framer Motion	",
    description:
      "Design visually compelling, mobile-first interfaces using Tailwind CSS and Framer Motion. Focused on clean layout, intuitive navigation, and smooth animations for a delightful user experience.",
    icon: <FaPalette className="text-purple-500 size-6" />,
  },
  {
    title: " API Development & Integration (REST & GraphQL)",
    description:
      "Develop RESTful and GraphQL APIs with proper error handling, authentication, and versioning. Seamlessly integrate third-party services and frontend logic to ensure smooth data flow.",
    icon: <FaCode className="text-purple-500 size-6" />,
  },
  {
    title: "User Authentication & Role-Based Access",
    description:
      "Implement user authentication using JWT, bcrypt, and OAuth with protected routes and role-based access control to ensure secure and controlled access across the application.",
    icon: <FaUserShield className="text-purple-500 size-6" />,
  },
  {
    title: "Custom Form Handling & Validation",
    description:
      "Build accessible, interactive forms with real-time validation using React Hook Form, Zod/Yup, and backend integration to collect, validate, and process user data securely.",
    icon: <FaWpforms className="text-purple-500 size-6" />,
  },
  {
    title: "State Management with Zustand or Redux",
    description:
      "Engineer scalable and efficient state management using Redux Toolkit or Zustand to maintain app consistency, improve performance, and simplify debugging in large applications.",
    icon: <FaProjectDiagram className="text-purple-500 size-6" />,
  },
  {
    title: "Progressive Web App (PWA) Development",
    description:
      "Transform web apps into PWAs with offline capabilities, service workers, and installable interfaces that offer native-app-like performance and reliability across devices.",
    icon: <FaRocket className="text-purple-500 size-6" />,
  },
  {
    title: "Cloud-Based Image Upload & Compression System",
    description:
      "Integrate advanced image upload systems with features like compression, live preview, cloud storage via Cloudinary, and secure file handling using Multer for efficient media management.",
    icon: <FaCloudUploadAlt className="text-purple-500 size-6" />,
  },

  {
    title: "Deployment & Hosting Automation",
    description:
      "Configure, deploy, and manage web applications using modern platforms like Vercel, Render, or Netlify. Includes CI/CD setup, environment variables, and domain management for production-ready apps.",
    icon: <FaServer className="text-purple-500 size-6" />,
  },
];
