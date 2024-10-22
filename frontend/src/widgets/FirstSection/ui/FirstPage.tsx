import React from "react";

interface FirstPageProps {
  onNext: () => void;
  onPrevious: () => void;
}

const FirstPage: React.FC<FirstPageProps> = ({ onNext, onPrevious }) => (
  <div>
    <h1>First Page</h1>
    <p>This is the content of the first page section.</p>
    <button onClick={onPrevious} disabled>
      Previous
    </button> {/* Disabled since there's no section before */}
    <button onClick={onNext}>
      Next
    </button>
  </div>
);

export default FirstPage;
