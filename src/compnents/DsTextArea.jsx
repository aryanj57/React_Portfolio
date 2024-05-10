import { TextareaAutosize, useTheme } from "@mui/material";
import React from "react";

const DsTextArea = ({ ...rest }) => {
  const theme = useTheme();
  return (
    <TextareaAutosize
      style={{
        borderRadius: "8px",
        border: "none",
        outline: "none",
        backgroundColor: "white",
        p: "40px !important",
        fontFamily: theme.typography.subtitle1.fontFamily,
        fontSize: theme.typography.subtitle1.color,
        resize: "none",
      }}
      {...rest}
    />
  );
};

export default DsTextArea;
