import React from "react";

interface ButtonProps {
  className: string;
  label: string;
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ className, label, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
