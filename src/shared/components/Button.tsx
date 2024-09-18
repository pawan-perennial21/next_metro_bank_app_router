import { FC } from "react";
import { IButton } from "../interface";

const Button: FC<IButton> = ({ children, ...rest }) => {
  return (
    <button className="custom-button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
