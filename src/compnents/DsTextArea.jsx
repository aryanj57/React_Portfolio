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
        p: "40px !important",
        fontFamily: theme.typography.subtitle1.fontFamily,
        fontSize: theme.typography.subtitle2.fontSize,
        resize: "none",
        color: theme.palette.typoBlack,
        backgroundColor: theme.palette.typoWhite,
      }}
      {...rest}
    />
  );
};

export default DsTextArea;
