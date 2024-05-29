import Layout from "../../compnents/Layout";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import DsButton from "../../compnents/DsButton";
import resume from "../../docs/resume.pdf";
const Home = ({ id }) => {
  const theme = useTheme();

  return (
    <Layout id={id}>
      <Stack
        justifyContent={{ xs: "flex-start", md: "center", lg: "center" }}
        alignItems="center"
        width="100%"
        height="100%"
        pt="20px"
      >
        <Stack
          direction={{ xs: "column", md: "row", lg: "row" }}
          width="80%"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            order={{ xs: 2, md: 1, lg: 1 }}
            width={{ xs: "100%", md: "30%", lg: "30%" }}
            mt={{ xs: "42px", md: "0px", lg: "0px" }}
            alignItems={{ xs: "center", md: "flex-start", lg: "flex-start" }}
            spacing={1}
          >
            <Typography variant="h1Bold" color="typoHeading">
              Hi I am,
            </Typography>
            <Typography variant="h1Bold" color="typoHeading">
              Aryan Jaiswal
            </Typography>
            <Typography variant="h6Bold" color="typoHeading">
              Software Development Engineer
            </Typography>
            <Stack>
              <Typography
                variant="body1"
                color="typoSubheading"
                textAlign={{ xs: "center", md: "left", lg: "left" }}
              >
                Highly skilled Frontend Developer with proficiency in the{" "}
                <b>MERN </b>
                stack. Passionate about crafting user-friendly & visually
                appealing user experiences that drive business value
              </Typography>
            </Stack>
            <Stack sx={{ pt: "20px" }}>
              <a
                href={resume}
                download="Aryan Jaiswal"
                target="_blank"
                rel="noreferrer"
              >
                <DsButton
                  variant="contained"
                  text="Resume"
                  style={{ width: "140px" }}
                />
              </a>
            </Stack>
          </Stack>

          <Box
            order={{ xs: 1, md: 2, lg: 2 }}
            component="img"
            src="/assests/aryan.jpg"
            alt="DP"
            ml={{ xs: "0px", md: "64px", lg: "64px" }}
            sx={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              border: `4px solid ${theme.palette.primary.main}`,
            }}
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
