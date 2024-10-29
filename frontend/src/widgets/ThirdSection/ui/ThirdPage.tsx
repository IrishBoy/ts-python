import React from "react";
import "./ThirdPage.css"; // Import the CSS file

interface ThirdPageProps {
  onNext: () => void;
  onPrevious: () => void;
}

const roadmapSteps = [
  {
    label: "End 2024",
    name:"dsd",
    title: "Prototype",
    points: ["Create account", "Verify email", "Complete profile"]
  },
  {
    label: "Late Q1 2025",
    name:"dsd",
    title: "Raise",
    points: ["Browse services", "Compare options", "Read reviews"]
  },
  {
    label: "Late Q3 2025",
    name:"dsd",
    title: "Beta",
    points: ["Contact provider", "Discuss details", "Get quote"]
  },
  {
    label: "End 2025",
    name:"dsd",
    title: "Release",
    points: ["Start project", "Track progress", "Provide feedback"]
  },
  {
    label: "Q1 2026",
    name:"dsd",
    title: "Work",
    points: ["Review work", "Release payment", "Leave review"]
  }
];

const ThirdPage: React.FC<ThirdPageProps> = ({ onNext, onPrevious }) => {
  return (
    <div className="full-page-section second-section">
       <div className="button-back-container">
          <button className="button-back" onClick={onPrevious}>Back</button>
        </div>
    <div className="container">
      <div className="line-container">
        <div className="line" />
        <div className="step-container">
          {roadmapSteps.map((step, index) => (
            <div key={index} className="step">
              <span className="step-label">{step.label}</span> {/* Add label above each circle */}
              <div className="circle-container">
                <div className="circle-bg" />
                <div className="circle-border">
                  <span className="circle-text">{step.title}</span>
                </div>
              </div>
              <div className="text-center px-2">
                {/* <h3 className="step-title">{step.title}</h3> */}
                <ul className="step-list">
                  {step.points.map((point, i) => (
                    <li key={i} className="step-item">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="button-next-container">
          <button className="button-back" onClick={onNext}>When?</button>
        </div>
    </div>
  );
};

export default ThirdPage;
