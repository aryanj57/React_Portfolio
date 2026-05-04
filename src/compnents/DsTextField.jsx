import { TextField } from "@mui/material";

const DsTextField = ({ styleProps, ...rest }) => {
  return (
    <TextField
      sx={{
        borderRadius: "8px",
        backgroundColor: "background.default",
        outline: "none",
        ...styleProps,
      }}
      {...rest}
    />
  );
};
export default DsTextField;
