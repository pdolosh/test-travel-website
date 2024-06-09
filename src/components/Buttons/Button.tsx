import React from "react";

interface IProps {
  label: string;
  startIcon?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<IProps> = ({
  label,
  onClick,
  startIcon,
  variant = "primary",
  size = "medium",
}) => {
  const baseStyle = `
     p-2 rounded-xl  text-sm flex items-center cursor-pointer transition-colors duration-300 ease-in-out ${
       variant === "primary" ? " font-semibold border bg-white-100 text-black" : ""
     } ${variant === "secondary" ? "bg-gray-100 bg-opacity-60  text-gray-600" : ""}
    ${
      variant === "outline"
        ? " font-semibold absolute bottom-2 right-2 bg-gray-800 bg-opacity-60 rounded-3xl text-white text-md px-1 flex items-center"
        : ""
    }
    ${size === "small" ? "py-1 px-2 text-xs" : ""}
    ${size === "large" ? "py-3 px-4 text-base" : ""}
  `;

  return (
    <button className={`${baseStyle}`} onClick={onClick} aria-label={label}>
      {startIcon && <span className="pr-2">{startIcon}</span>}
      {label}
    </button>
  );
};

export default Button;
