import React, { useState } from "react";

const initialButtonClasses = ``;

const Button = ({ text, isPrimary, onClick }) => {
  const [buttonClasses, setButtonClasses] = useState(initialButtonClasses);

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
