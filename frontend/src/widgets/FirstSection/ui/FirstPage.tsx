import React from "react";

const FirstPage: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div className="full-page-section first-section">
    <div className="text-container">
      <h1 className="title">First Page</h1>
      <p className="subtitle">We automate freelance</p>
    </div>
    <div className="button-container">
      <button className="button" onClick={onNext}>How?</button>
    </div>
  </div>
);

export default FirstPage;
