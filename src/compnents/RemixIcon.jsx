import { useTheme } from "@mui/material";
import React from "react";

const RemixIcon = ({ className, withBorder = false, ...rest }) => {
  const theme = useTheme();
  return (
    <i
      className={className}
      style={{
        color: `${theme.palette.typoBlack} !important`,
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
