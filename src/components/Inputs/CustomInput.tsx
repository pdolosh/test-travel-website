import React, { ChangeEvent } from "react";

interface CustomInputProps {
  type: string;
  value: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  onClick?: () => void;
  startIcon?: any;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  readOnly,
  onClick,
  startIcon,
}) => {
  return (
    <div className="flex items-center py-2 px-2 rounded-xl border text-gray-500 bg-white">
      {startIcon && <div className="flex-shrink-0">{startIcon}</div>}
      <input
        type={type}
        className="w-full outline-none flex-grow py-1"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        onClick={onClick}
      />
    </div>
  );
};

export default CustomInput;
