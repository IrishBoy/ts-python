import React, { useState } from "react";

interface ThirdPageProps {
  onNext: () => void;
  onPrevious: () => void;
}

const ThirdPage: React.FC<ThirdPageProps> = ({ onNext, onPrevious }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:8000/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <div>
      <h1>Third Page</h1>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email"
      />
      <button onClick={handleSubmit}>Submit Email</button>
      <div>
        <button onClick={onPrevious}>
          Previous
        </button>
        <button onClick={onNext} disabled>
          Next
        </button> {/* Disabled since there's no section after */}
      </div>
    </div>
  );
};

export default ThirdPage;
