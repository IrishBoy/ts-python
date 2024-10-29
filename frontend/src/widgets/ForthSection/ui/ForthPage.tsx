import React, { useState } from "react";

interface ForthPageProps {
  onNext: () => void;
  onPrevious: () => void;
}

const ForthPage: React.FC<ForthPageProps> = ({ onNext, onPrevious }) => {
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
      <h1>Forth Page</h1>
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

export default ForthPage;
