import { useTheme } from "@mui/material";
import React from "react";

const RemixIcon = ({ className, color, withBorder = false, ...rest }) => {
  const theme = useTheme();
  const finalColor = color ? color : theme.palette.typoWhite;
  return (
    <i
      className={className}
      style={{
        color: finalColor,
        display: "flex",
        width: "16px",
        height: "16px",
        p: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...rest}
    />
  );
};

export default RemixIcon;
