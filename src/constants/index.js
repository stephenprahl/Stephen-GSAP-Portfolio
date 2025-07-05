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
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
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
    name: "Project Manager",
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
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Stephen brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/opexBanner.jpeg",
    logoPath: "/images/opexLogo.png",
    title: "Lead Software Engineer",
    date: "December 2024 - May 2025",
    responsibilities: [
      "Devised scalable APIs and databases using Supabase to enhance operational efficiency.",
      "Constructed Angular based applications employing component-driven architecture, boosting user engagement by 15%.",
      "Spearheaded the development of a monolithic connected worker platform, achieving a 20% conversion rate.",
      "Kept pace with emerging frontend technologies and industry advancements to ensure continuous professional growth."
    ],
  },
  {
    review: "Stephen's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/proBanner.jpg",
    logoPath: "/images/proLogo.jpg",
    title: "Senior Web Developer",
    date: "March 2025 - May 2025",
    responsibilities: [
      "Delivered tailored web applications for clients using Velo.js, Node.js, JavaScript, Webflow, and Wix",
      "Oversaw ongoing maintenance to ensure peak performance and user satisfaction.",
      "Balanced multiple projects with efficient time management and organizational skills.",
    ],
  },
  {
    review: "Stephen’s work on Panpalz mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/panBanner.svg",
    logoPath: "/images/panLogo.jpeg",
    title: "React Native Developer",
    date: "January 2024 - March 2025",
    responsibilities: [
      "Built cross-platform interfaces with React-Native and Expo, contributing to company standards while exploring personal growth.",
      "Optimized and maintained continuous workflow while recognized as a resilient problem-solver and high-impact performer committed to excellence.",
      "Demonstrated resilience, versatility, and unwavering commitment exceeding expectations and finishing tasks in a timely manner.",
      "Empowered junior and senior developers with expert guidance and support, driving innovation and excellence across frontend and backend projects.",
      "Excelled in a dynamic, high-pressure environment by rapidly adapting to shifting priorities, managing heavy workloads with precision, consistently delivering exceptional outcomes."
    ],
  },
  {
    review: "Stephen’s work brought a high level of quality and efficiency. He delivered solutions that enhanced our digital experience & met our product goals.",
    imgPath: "/images/execBanner.png",
    logoPath: "/images/execLogo.png",
    title: "Full Stack Developer",
    date: "March 2020 - January 2024",
    responsibilities: [
      "Utilized Python and machine learning methodologies to construct and deploy predictive models for customer churn, leading to a significant improvement in customer retention.",
      "Achieved an 85% accuracy rate in identifying at-risk customers, enabling proactive retention strategies and driving a substantial increase in customer lifetime value.",
      "Crafted intuitive user interfaces with React and Bootstrap, increasing user satisfaction by 20%.",
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
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
