import { FormEvent } from "react";

interface ButtonProps {
  className: string;
  label: string;
  onClick: (event: FormEvent<HTMLButtonElement>) => void;
}

function Button({ className, label, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
