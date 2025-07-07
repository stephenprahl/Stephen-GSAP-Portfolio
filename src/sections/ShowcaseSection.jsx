import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
                On-Demand Proposal Generation Made Simple with a Powerful, AI & User-Friendly App
                called BidBuddyAI
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, Bun, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={proposalRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/analytica.png"
                  alt="Analytica App Interface"
                />
              </div>
              <h2>Analytica the mobile app for Data</h2>
            </div>

            <div className="project" ref={banditRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/fireFlex.png" alt="FireFlexAI App" />
              </div>
              <h2>FireFlexAI is a cross platform project management soluton</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
