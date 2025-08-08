import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const analyticaRef = useRef(null);
  const proposalRef = useRef(null);
  const banditRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [analyticaRef.current, proposalRef.current, banditRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={analyticaRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/bidBuddy.png" alt="AI Proposal App" />
            </div>
            <div className="text-content">
              <h2>
                Effortlessly create winning proposals in seconds with BidBuddyAI, the ultimate AI-powered, user-friendly app for on-demand proposal generation.
              </h2>
              <p className="text-white-50 md:text-xl">
                Lightning-fast AI app crafted with React, Bun, and TailwindCSS, optimized for SEO, powered by a custom ChatGPT for an unbeatable, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={proposalRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/xora.png"
                  alt="Analytica App Interface"
                />
              </div>
              <h2>XORA - Revolutionary video editing software delivering unparalleled AI-powered features, seamless creative tools, and dynamic editing experiences for content creators and professionals.</h2>
            </div>

            <div className="project" ref={banditRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/fireFlex.png" alt="FireFlexAI App" />
              </div>
              <h2>FireFlexAI is an innovative, cross-platform project management solution empowering teams with AI-driven tools, seamless collaboration, and dynamic task tracking for startups and businesses.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
