import { Box, Button, darken, Typography, useTheme } from "@mui/material";
const DsButton = ({
  sx,
  text,
  textVariant = "buttonBold",
  fullWidth = false,
  isDark = false,
  ...rest
}) => {
  const theme = useTheme();
  const bgColor = isDark
    ? theme.palette.primary.contrastText
    : theme.palette.primary.main;
  return (
    <Box>
      <Button
        {...rest}
        fullWidth={fullWidth}
        sx={{
          color: "inherit",
          textTransform: "none",
          px: "12px",
          py: "8px",
          bgcolor: bgColor,
          "&:hover": {
            backgroundColor: darken(bgColor, 0.06),
            boxShadow: "none",
          },
          ...sx,
        }}
      >
        <Typography variant={textVariant}>{text}</Typography>
      </Button>
    </Box>
  );
};

export default DsButton;
