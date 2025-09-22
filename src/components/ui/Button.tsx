import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "outline",
  size = "md",
  icon,
  iconPosition = "right",
  className = ""
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors";
  
  const variantClasses = {
    primary: "bg-[#5da502] text-white hover:bg-[#4d8a02]",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-[#475467] text-[#1e1e1e] hover:bg-gray-50"
  };

  const sizeClasses = {
    sm: "h-[40px] px-4 py-2 text-sm rounded-[32px]",
    md: "h-[52px] px-6 py-3 text-base rounded-[44px]",
    lg: "h-[60px] px-8 py-4 text-lg rounded-[50px]"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <div className="inline-flex items-center">
      <button className={classes} onClick={onClick}>
        {icon && iconPosition === "left" && (
          <img src={icon} alt="" className="w-5 h-5 mr-2" />
        )}
        <span className="whitespace-nowrap">{children}</span>
        {icon && iconPosition === "right" && (
          <img src={icon} alt="" className="w-5 h-5 ml-2" />
        )}
      </button>
      
      {icon && iconPosition === "right" && (
        <div className="flex w-[52px] h-[52px] items-center justify-center -ml-5 bg-[#5da502] rounded-full">
          <img
            className="w-[30px] h-[30px]"
            alt="Action icon"
            src={icon}
          />
        </div>
      )}
    </div>
  );
};