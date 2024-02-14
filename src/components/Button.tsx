import React from "react";

interface ButtonProps {
  className: string;
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, label }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
