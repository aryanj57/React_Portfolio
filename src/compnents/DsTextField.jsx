import { TextField, useTheme } from "@mui/material";

const DsTextField = ({ styleProps, ...rest }) => {
  const theme = useTheme();
  return (
    <TextField
      sx={{
        borderRadius: "8px",
        color: "typoBlack !important",
        backgroundColor: "typoWhite",
        outline: "none",
        "& .MuiInputBase-root": {
          color: `${theme.palette.typoBlack}`,
        },
        ...styleProps,
      }}
      {...rest}
    />
  );
};
export default DsTextField;
