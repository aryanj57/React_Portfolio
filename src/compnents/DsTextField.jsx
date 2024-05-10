import { TextField } from "@mui/material";

const DsTextField = (rest) => {
  return (
    <TextField
      sx={{
        borderRadius: "8px",
        backgroundColor: "white",
        outline: "none",
        "& .MuiFormHelperText-root": {
          backgroundColor: "none",
          border: "none !important",
          margin: "0px",
          color: "#FE372A",
        },
      }}
      {...rest}
    />
  );
};
export default DsTextField;
