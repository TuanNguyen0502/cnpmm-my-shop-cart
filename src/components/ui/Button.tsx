import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  style,
  ...props
}) => {
  const baseStyle: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    backgroundColor: variant === "primary" ? "#007bff" : "#dc3545",
    color: "#fff",
    ...style,
  };
  return <button style={baseStyle} {...props} />;
};
