"use client";
import { FC, forwardRef, useState } from "react";
import Typography from "./Typography";
import { EyeIcon } from "../icons";
import sassVariables from "@/styles/variables.module.scss";
import { InputProps } from "../interface";

// Update to forwardRef for handling refs
const InputField: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage = "", label = "", type, name, ...rest }, ref) => {
    const [isPasswordShow, setPasswordShow] = useState(false);

    return (
      <div className="input-wrapper">
        {label && (
          <label className="custom-label">
            <Typography variant="h6">{label}</Typography>
          </label>
        )}
        <div className="input-styles">
          <input
            {...rest}
            name={name}
            ref={ref} // Pass the ref to the input element
            className={`custom-input ${errorMessage ? "error-input" : ""}`}
            type={isPasswordShow && type === "password" ? "text" : type} // Toggle password visibility
          />
          {name?.toLowerCase().includes("password") && type === "password" && (
            <EyeIcon onClick={() => setPasswordShow(!isPasswordShow)} />
          )}
        </div>
        {errorMessage && (
          <div className="error-message">
            <Typography variant="span" color={sassVariables.primaryColor}>
              {errorMessage}
            </Typography>
          </div>
        )}
      </div>
    );
  }
);

// Give display name for better debugging
InputField.displayName = "InputField";

export default InputField;
