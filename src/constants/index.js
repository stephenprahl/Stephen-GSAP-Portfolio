const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 40, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Achieve flawless, high-quality results with unmatched precision and meticulous attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Stay informed with real-time updates, ensuring crystal-clear transparency every step of the way.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Delivering projects on time with exceptional quality and unwavering attention to every detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "AI Developer",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "AI Developer",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Stephen's creative technical expertise significantly improved our frontend performance, delivering invaluable faster experiences for our users.",
    imgPath: "/images/opexBanner.jpeg",
    logoPath: "/images/opexLogo.png",
    title: "Lead Software Engineer",
    date: "December 2024 - May 2025",
    responsibilities: [
      "Created scalable APIs and robust databases with Supabase, boosting operational efficiency through streamlined backend development.",
      "Built high-performance Angular applications using a component-driven architecture, which boosted user engagement by 15% and delivered a superior user experience.",
      "Led the development of a monolithic connected worker platform, driving a remarkable 20% conversion rate and maximizing operational efficiency.",
      "Actively stayed current with emerging frontend technologies and industry advancements, ensuring continuous professional development and a leading-edge skillset."
    ],
  },
  {
    review: "Stephen's outstanding contributions to Docker web applications showcase a strong problem-solving mindset and a talent for innovative solutions.",
    imgPath: "/images/proBanner.jpg",
    logoPath: "/images/proLogo.jpg",
    title: "Senior Web Developer",
    date: "March 2025 - May 2025",
    responsibilities: [
      "Created tailored web applications for clients with Velo.js, Node.js, JavaScript, Webflow, and Wix, focusing on custom solutions and client-centric design.",
      "Led ongoing maintenance and support, ensuring peak performance and maximum user satisfaction through proactive issue resolution.",
      "Managed multiple projects effectively through expert time management and strong organizational skills, consistently meeting deadlines.",
    ],
  },
  {
    review: "Stephen delivered high-quality, efficient solutions for the Panpalz mobile app, enhancing the user experience and successfully achieving key product goals.",
    imgPath: "/images/panBanner.svg",
    logoPath: "/images/panLogo.jpeg",
    title: "React Native Developer",
    date: "January 2024 - March 2025",
    responsibilities: [
      "Developed cross-platform interfaces using React Native and Expo, aligning with company standards and fostering continuous professional growth.",
      "Optimized continuous workflow and provided consistent maintenance, demonstrating a resilient problem-solving mindset and a track record of high-impact performance and a commitment to excellence.",
      "Demonstrated resilience and versatility, consistently exceeding expectations and delivering high-quality results on time.",
      "Provided expert guidance and support to both junior and senior developers, fostering innovation and excellence in frontend and backend projects.",
      "Excelled in dynamic, high-pressure environments by rapidly adapting to shifting priorities, expertly managing heavy workloads, and consistently delivering exceptional results."
    ],
  },
  {
    review: "Stephen delivered high-quality, efficient solutions that enhanced our digital experience and successfully achieved key product goals.",
    imgPath: "/images/execBanner.png",
    logoPath: "/images/execLogo.png",
    title: "Full Stack Developer",
    date: "March 2020 - January 2024",
    responsibilities: [
      "Built and deployed predictive models for customer churn using Python and machine learning, resulting in a significant improvement in customer retention.",
      "85% accuracy rate in identifying at-risk customers, leading to proactive retention strategies and a substantial boost in customer lifetime value.",
      "Crafted intuitive user interfaces with React and Bootstrap, which increased user satisfaction by 20%.",
      "Engineered real-time solutions for business-critical issues, boosting system reliability and cutting downtime by 30%.",
      "Partnered with cross-functional teams to ensure timely and budget-conscious project completion."
    ],
  },
];

const expLogos = [
  {
    name: "execLogo",
    imgPath: "/images/execLogo.png",
  },
  {
    name: "panLogo",
    imgPath: "/images/panLogo.jpeg",
  },
  {
    name: "proLogo",
    imgPath: "/images/proLogo.jpg",
  },
  {
    name: "opexLogo",
    imgPath: "/images/opexLogo.png"
  }
];

const testimonials = [
  {
    name: "Esther McGregor",
    mentions: "@esthermcgregor",
    review:
      "Stephen took our complex project requirements and delivered a seamless, functional website, showcasing his outstanding problem-solving abilities.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Boggs",
    mentions: "@wadeboggs",
    review:
      "Stephen transformed our outdated website into a modern, user-friendly platform, demonstrating unmatched attention to detail and a commitment to quality on all web development projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Benson Boone",
    mentions: "@bensonboone",
    review:
      "Collaborating with Stephen was a pleasure. His professionalism, promptness, and dedication ensured exceptional results. Stephen's enthusiasm for development makes him the ideal partner for anyone looking to elevate their website and brand.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin Mims",
    mentions: "@marvinmims",
    review:
      "Stephen transformed our outdated website into a modern, intuitive platform that is both user-friendly and easy to navigate, delivering fantastic results.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Collins",
    mentions: "@floydcollins",
    review:
      "Stephen's web development expertise delivered a robust, scalable e-commerce solution, leading to a significant increase in online sales.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Alberto Del Rio",
    mentions: "@albertodelrio",
    review:
      "Stephen delivered a website that exceeded our expectations by perfectly understanding our requirements, showcasing his top-notch skills in both frontend and backend development.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "instagram",
    imgPath: "/images/instagram.svg",
    href: "https://instagram.com/step_732"
  },
  {
    name: "youtube",
    imgPath: "/images/youtube.svg",
    href: "https://youtube.com/@wickedui"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    href: "https://facebook.com/stevie732"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    href: "https://twitter.com/@wickedui"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    href: "https://linkedin.com/in/stephen-prahl"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
