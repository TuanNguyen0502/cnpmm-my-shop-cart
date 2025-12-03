import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, style, ...props }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      {label && (
        <label style={{ display: "block", marginBottom: "4px" }}>{label}</label>
      )}
      <input
        style={{
          padding: "8px",
          width: "100%",
          boxSizing: "border-box",
          ...style,
        }}
        {...props}
      />
    </div>
  );
};
