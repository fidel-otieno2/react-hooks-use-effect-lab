import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10); // ✅ internal state

  useEffect(() => {
    if (timeRemaining === 0) {
      onAnswered(false);
      setTimeRemaining(10); // reset for next question
      return;
    }

    const timeoutId = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h1>{question.prompt}</h1>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      {/* ✅ EXACT STRING TEST EXPECTS */}
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
