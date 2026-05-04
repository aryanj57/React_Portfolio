import { Stack } from "@mui/material";

const Section = ({ id, children, customSX }) => {
  // const getRandomColor = () => {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  return (
    <Stack
      id={id}
      minHeight="100vh"
      pt="100px"
      width="100%"
      sx={{ backgroundColor: "background.default", ...customSX }}
    >
      {children}
    </Stack>
  );
};

export default Section;
