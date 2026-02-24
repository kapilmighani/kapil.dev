import ProjectVideo from "../assets/sample.mp4";

export const projects = [
  {
    title: "WealthWay - Stock Trading Platform",
    description:
      "A full-stack MERN stock trading platform that allows users to buy, sell, and track stocks in real-time with secure authentication.",

    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs"
    ],

    features: [
      "User Authentication (JWT + Cookies)",
      "Buy & Sell Stock System",
      "Real-time Portfolio Tracking",
      "Watchlist Management",
      "Protected Routes"
    ],

    role: [
      "Designed frontend trading dashboard UI",
      "Developed REST APIs for order placement",
      "Implemented secure JWT authentication",
      "Managed MongoDB schema"
    ],

    video: ProjectVideo,
    live: "#",
    github: "#",
  },

  {
    title: "Organic Veg - E-commerce Platform",
    description:
      "E-commerce platform for selling organic fruits and vegetables with cart and secure payment integration.",

    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay"
    ],

    features: [
      "User Signup & Login",
      "Add to Cart System",
      "Razorpay Payment Integration",
      "Admin Product Management",
      "Responsive UI"
    ],

    role: [
      "Built responsive product & cart UI",
      "Integrated Razorpay payment gateway",
      "Created backend APIs",
      "Implemented authentication"
    ],

    video: ProjectVideo,
    live: "#",
    github: "#",
  },

  {
    title: "StayFinder - Property Booking Platform",
    description:
      "A property booking platform where users can explore, list, and book properties securely.",

    techStack: [
      "React.js",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary"
    ],

    features: [
      "User Authentication",
      "Add/Edit/Delete Listings",
      "Booking System",
      "Review & Rating",
      "Image Upload"
    ],

    role: [
      "Developed CRUD operations",
      "Implemented booking system",
      "Integrated image upload service",
      "Built authentication flow"
    ],

    video: ProjectVideo,
    live: "#",
    github: "#",
  },

  {
    title: "CollabX - Real-time Collaborative Board",
    description:
      "A real-time collaborative task management board with live updates using Socket.io.",

    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT"
    ],

    features: [
      "Real-time Updates",
      "Task Create/Update/Delete",
      "Smart Assign Feature",
      "Activity Logging",
      "Protected Routes"
    ],

    role: [
      "Implemented real-time communication",
      "Developed task APIs",
      "Designed interactive board UI",
      "Handled authentication"
    ],

    video: ProjectVideo,
    live: "#",
    github: "#",
  },
];