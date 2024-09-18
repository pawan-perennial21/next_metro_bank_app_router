import React, { CSSProperties } from "react";
import { ITypographyProps } from "../interface";

const Typography: React.FC<ITypographyProps> = ({
  variant = "h6",
  color = "inherit",
  fontWeight = "700",
  fontStyle = "normal",
  className = "",
  style = {},
  children,
}) => {
  const variants: Record<string, CSSProperties> = {
    h1: { fontSize: "32px" },
    h2: { fontSize: "24px" },
    h3: { fontSize: "20px" },
    h4: { fontSize: "18px" },
    h5: { fontSize: "16px" },
    h6: { fontSize: "14px" },
    span: { fontSize: "12px" },
  };

  const Element = variant as keyof JSX.IntrinsicElements;

  return (
    <Element
      style={{
        fontSize: "inherit",
        lineHeight: "inherit",
        color,
        fontWeight,
        fontStyle,
        ...variants[variant],
        ...style,
      }}
      className={className}
    >
      {children}
    </Element>
  );
};

export default Typography;
