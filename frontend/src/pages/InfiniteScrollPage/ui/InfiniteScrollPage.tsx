import React, { useState, useEffect, useRef } from "react";
import { FirstPage } from "../../../widgets/FirstSection";
import { SecondPage } from "../../../widgets/SecondSection";
import { ThirdPage } from "../../../widgets/ThirdSection";
import './InfiniteScrollPage.css'; // Import the CSS file for styling

const InfiniteScrollPage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([1]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToSection = (sectionId: number) => {
    document.getElementById(`section-${sectionId}`)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newSection = visibleSections.length + 1;
            if (newSection <= 3) {
              setVisibleSections((prevSections) => [...prevSections, newSection]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [visibleSections]);

  useEffect(() => {
    const lastSection = document.querySelector(`#section-${visibleSections.length}`);
    if (lastSection && observerRef.current) {
      observerRef.current.observe(lastSection);
    }
  }, [visibleSections]);

  return (
    <div>
      {visibleSections.includes(1) && (
        <section id="section-1" className="full-page-section">
          <FirstPage onNext={() => scrollToSection(2)} onPrevious={() => scrollToSection(1)} />
        </section>
      )}
      {visibleSections.includes(2) && (
        <section id="section-2" className="full-page-section">
          <SecondPage onNext={() => scrollToSection(3)} onPrevious={() => scrollToSection(1)} />
        </section>
      )}
      {visibleSections.includes(3) && (
        <section id="section-3" className="full-page-section">
          <ThirdPage onNext={() => scrollToSection(3)} onPrevious={() => scrollToSection(2)} />
        </section>
      )}
    </div>
  );
};

export default InfiniteScrollPage;