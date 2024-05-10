import { Box, Button, Typography } from "@mui/material";

const DsButton = ({
  text,
  textVariant = "buttonBold",
  fullWidth = false,
  ...rest
}) => {
  return (
    <Box>
      <Button
        {...rest}
        fullWidth={fullWidth}
        sx={{
          textTransform: "none",
          px: "12px",
          py: "8px",
        }}
      >
        <Typography variant={textVariant}>{text}</Typography>
      </Button>
    </Box>
  );
};

export default DsButton;
