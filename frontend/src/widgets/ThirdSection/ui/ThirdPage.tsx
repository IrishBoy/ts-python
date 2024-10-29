import React from "react";
import "./ThirdPage.css"; // Import the CSS file

interface ThirdPageProps {
  onNext: () => void;
  onPrevious: () => void;
}

const roadmapSteps = [
  {
    label: "Step 1",
    title: "Registration",
    points: ["Create account", "Verify email", "Complete profile"]
  },
  {
    label: "Step 2",
    title: "Discovery",
    points: ["Browse services", "Compare options", "Read reviews"]
  },
  {
    label: "Step 3",
    title: "Connection",
    points: ["Contact provider", "Discuss details", "Get quote"]
  },
  {
    label: "Step 4",
    title: "Execution",
    points: ["Start project", "Track progress", "Provide feedback"]
  },
  {
    label: "Step 5",
    title: "Completion",
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
                  <span className="circle-text">Etap</span>
                </div>
              </div>
              <div className="text-center px-2">
                <h3 className="step-title">{step.title}</h3>
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
