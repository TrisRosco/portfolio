import React from "react";

const Button = ({ children, ...props }) => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
