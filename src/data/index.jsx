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

export const projects = [
  {
    id: 1,
    title: "MessageHub Application (Modern)",
    link: "https://messagehub-application.onrender.com",
    description:
      "A real-time messaging platform that ensures instant communication with minimal latency.",
    img: "/projects/MessageHub.png",
    iconLists: [
      "/icons/mongodb.svg",
      "/icons/react.svg",
      "/icons/react-router.svg",
      "/icons/nodejs.svg",
      "/icons/cloudinary.svg",
      "/icons/zustand.svg",
    ],
  },
  {
    id: 2,
    title: "International Match Application",
    link: "https://international-match-app.vercel.app",
    description:
      "A sleek and responsive match-search interface tailored for browsing global sports events.",
    img: "/projects/InternationalMatch.png",
    iconLists: [
      "/icons/react.svg",
      "/icons/tailwindcss.svg",
      "/icons/postcss.svg",
      "/icons/vite.svg",
      "/icons/autoprefixer.svg",
      "/icons/eslint.svg",
    ],
  },
  {
    id: 3,
    title: "Pizza Joint Application",
    link: "https://pizza-joint-dun.vercel.app/",
    description:
      "An animated pizza ordering web app, which delivers an interactive user flow with real-time route transitions.",
    img: "/projects/PizzaJoint.png",
    iconLists: [
      "/icons/react.svg",
      "/icons/motion.png",
      "/icons/react-router.svg",
      "/icons/vite.svg",
      "/icons/eslint.svg",
      "/icons/javascript.svg",
    ],
  },
  {
    id: 4,
    title: "Date Picker Application",
    link: "https://date-picker-chi.vercel.app/",
    description:
      "A highly accurate and responsive date selection tool designed with React, Zustand, and date-fns.",
    img: "/projects/DatePicker.png",
    iconLists: [
      "/icons/react.svg",
      "/icons/tailwindcss.svg",
      "/icons/postcss.svg",
      "/icons/zustand.svg",
      "/icons/autoprefixer.svg",
      "/icons/eslint.svg",
    ],
  },
];

export const navItems = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "The passion and ownership Ranjeet brings is rare. From UI builds to auth flows — he handled everything with confidence and clarity.",
    name: "Sanjeet Vishwakarma",
    designation: "Technical Project Manager at Deloitte",
    src: "/testimonials/sanjeetKumarVishwakarma.png",
  },
  {
    id: 2,
    quote:
      "Ranjeet went above and beyond to help us optimize our app’s performance. His React skills and attention to UX helped us retain more users post-launch.",
    name: "khushali Gupta",
    designation: "Professor at Chadrabhan Sharma College",
    src: "/testimonials/khushaliGupta.png",
  },
  {
    id: 3,
    quote:
      "From clean UI to scalable code, Ranjeet brought clarity and speed to our frontend workflows. His proactive updates kept us confident throughout the sprint.",
    name: "Devendra Vishwakarma",
    designation: "Product Manager at Apextron electronics Private Limited",
    src: "/testimonials/devendraVishwakarma.png",
  },
  {
    id: 4,
    quote:
      "His frontend delivery was always on time, responsive across devices, and accessible. Definitely someone we’d want to work with again in future builds.",
    name: "Sanoj Jaiswar",
    designation: "Freelancer at Upwork",
    src: "/testimonials/sanojJaiswar.jpeg",
  },
  {
    id: 5,
    quote:
      "Ranjeet's ability to understand requirements quickly and deliver exactly what we needed — and even better — made our product launch smooth and stress-free.",
    name: "Ankita Pawar",
    designation: "Operations Director at Apextron electronics Private Limited",
    src: "/testimonials/ankitaPawar.png",
  },
  {
    id: 6,
    quote:
      "From concept to deployment, Ranjeet handled everything with remarkable clarity and speed. His commitment to clean architecture is commendable.",
    name: "Deepak Joshi",
    designation: "Trading Master",
    src: "/testimonials/deepakJoshi.png",
  },
  {
    id: 7,
    quote:
      "Ranjeet’s implementation of real-time messaging using Socket.IO added real value to our user experience. He always thinks two steps ahead.",
    name: "Ashvani Vishwakarma",
    designation: "Freelancer at Upwork",
    src: "/testimonials/ashvaniVishwakarma.png",
  },
  {
    id: 8,
    quote:
      "Ranjeet’s flexibility with scope changes and his quick turnaround made collaboration seamless. He’s the kind of developer every agile team needs.",
    name: "Sonam Mishra",
    designation: "Product Manager at Sna Infotech",
    src: "/testimonials/sonamMishra.png",
  },
  {
    id: 9,
    quote:
      "We collaborated with Ranjeet on a deadline-driven React project. He delivered pixel-perfect components and suggested impactful improvements to our design system.",
    name: "Satya Prakash Verma",
    designation: "Freelancer at Upwork",
    src: "/testimonials/satyaPrakashVerma.jpeg",
  },
  {
    id: 10,
    quote:
      "His ability to translate complex requirements into elegant frontend components using React and Tailwind impressed the entire team.",
    name: "Sachin Patel",
    designation: "Freelancer at Toptal",
    src: "/testimonials/sachinPatel.jpeg",
  },
  {
    id: 11,
    quote:
      "Ranjeet understood the business logic right away and delivered a solid full-stack feature in just days. His MERN stack expertise really shows in action.",
    name: "Netal Riswal",
    designation: "Java Developer at FynTune Solution Private Limited",
    src: "/testimonials/netalRiswal.jpeg",
  },
  {
    id: 12,
    quote:
      "He brought a fresh energy and technical depth to our dev team. His efficient use of Zustand, Tailwind, and Framer Motion elevated the overall quality.",
    name: "Ravi Kumar",
    designation: "Software Engineer at lovely Professinal University",
    src: "/testimonials/raviKumar.png",
  },
  {
    id: 13,
    quote:
      "I’ve worked with several developers, but Ranjeet’s combination of communication, speed, and clean code stands out. A dependable choice for any web project.",
    name: "Vivek Chauhan",
    designation: "Technical support at Accenture",
    src: "/testimonials/vivekChauhan.png",
  },
  {
    id: 14,
    quote:
      "Ranjeet not only fixed long-standing bugs in our system but also refactored the architecture for better scalability.",
    name: "Sachin Prajapati",
    designation: "Freelancer at Upwork",
    src: "/testimonials/sachinPrajapati.png",
  },
  {
    id: 15,
    quote:
      "He tackled our UI overhaul using Framer Motion and Zustand like a pro. The result? A faster, cleaner, and more user-friendly product.",
    name: "Ankit Maurya",
    designation: "Freelancer at Toptal",
    src: "/testimonials/ankitMaurya.png",
  },
  {
    id: 16,
    quote:
      "Working with Ranjeet felt like having a senior onboard — his curiosity, testing rigor, and problem-solving added massive value to our sprint cycles.",
    name: "Aarti Sharma",
    designation: "Freelancer at Fiverr",
    src: "/testimonials/aartiSharma.jpg",
  },
  {
    id: 17,
    quote:
      "His portfolio doesn’t lie — Ranjeet builds modern, responsive, and delightful interfaces. We appreciated his clarity in communication and execution.",
    name: "Shubham Vishwakarma",
    designation: "Product supplier at Kishan Medical Store",
    src: "/testimonials/shubhamVishwakarma.png",
  },
  {
    id: 18,
    quote:
      "Ranjeet’s code was readable, reusable, and fully aligned with our component architecture. Truly dependable and collaborative throughout.",
    name: "Satyam Pandey",
    designation: "Database Manager At Proteus Technologies Pvt Ltd",
    src: "/testimonials/satyamPandey.jpg",
  },
  {
    id: 19,
    quote:
      "Ranjeet brought structure and logic to our messy frontend codebase. His ability to work independently while syncing regularly was a big win.",
    name: "Muskan Singh",
    designation: "Freelancer at Fiverr",
    src: "/testimonials/muskanSingh.png",
  },
  {
    id: 20,
    quote:
      "What sets Ranjeet apart is his mindset — he’s not just a coder, he thinks about the product, the end user, and long-term scalability.",
    name: "Pramod Vishwakarma",
    designation: "Product contractor at SiyaRam Furnitures",
    src: "/testimonials/pramodVishwakarma.png",
  },
  {
    id: 21,
    quote:
      "He helped us rebrand our web app UI with consistency and polish. His use of Lucide Icons, Tailwind utilities, and responsiveness was top-notch.",
    name: "Anshu Sharma",
    designation: "Freelancer at Upwork",
    src: "/testimonials/anshuSharma.png",
  },
  {
    id: 22,
    quote:
      "Ranjeet elevated the user experience with just the right mix of design sense and dev logic. He’s a real asset for any frontend-heavy application.",
    name: "Aadarsh Mishra",
    designation: "Freelancer at Toptal",
    src: "/testimonials/aadarshMishra.png",
  },
  {
    id: 23,
    quote:
      "Our client-side routing and loading states became super smooth, thanks to Ranjeet’s clever implementation of React Router and async handlers.",
    name: "Rishta Vishwakarma",
    designation: "Full Stack Developer at Digital Rhombus",
    src: "/testimonials/rishtaVishwakarma.jpg",
  },
  {
    id: 24,
    quote:
      "His work on our internal dashboard was clean, efficient, and highly maintainable. Would definitely recommend him for any MERN-based project.",
    name: "Krishna Vishwakarma",
    designation: "Freelancer at Fiverr",
    src: "/testimonials/krishnaVishwakarma.png",
  },
];
