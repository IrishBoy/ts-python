import React from "react";

const SecondPage: React.FC<{ onNext: () => void; onPrevious: () => void }> = ({ onNext, onPrevious }) => (
  <div className="full-page-section second-section">
     <div className="button-back-container">
      <button className="button-back" onClick={onPrevious}>Back</button>
    </div>
    <div className="text-container">
    <h1 className="title">Second Page</h1>
    </div>
    <div className="button-next-container">
      <button className="button-back" onClick={onNext}>When?</button>
    </div>
  </div>
);

export default SecondPage;
