import { Stack } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Stack
      minHeight="100vh"
      width="100%"
      overflow="scroll"
      alignItems="center"
      justifyContent="center"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {children}
    </Stack>
  );
};

export default Layout;
