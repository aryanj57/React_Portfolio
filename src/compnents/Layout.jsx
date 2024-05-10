import { Grid, Stack } from "@mui/material";

const Layout = ({ id, children, ...rest }) => {
  // const getRandomColor = () => {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  return (
    <Grid
      container
      id={id}
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
      direction="row"
      {...rest}
      minHeight="100vh"
      // bgcolor={getRandomColor()}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Stack
          height="100%"
          width="100%"
          position="relative"
          p="0px"
          m="0px"
          overflow="auto"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Layout;
