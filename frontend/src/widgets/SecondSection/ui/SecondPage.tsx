import React from "react";

interface SecondPageProps {
  onNext: () => void;
  onPrevious: () => void;
}

const SecondPage: React.FC<SecondPageProps> = ({ onNext, onPrevious }) => (
  <div>
    <h1>Second Page</h1>
    <p>This is the content of the second page section.</p>
    <button onClick={onPrevious}>
      Previous
    </button>
    <button onClick={onNext}>
      Next
    </button>
  </div>
);

export default SecondPage;
