import Layout from "../../compnents/Layout";
import { Box, Stack, Typography } from "@mui/material";
import DsButton from "../../compnents/DsButton";
import resume from "../../docs/resume.pdf";
const Home = ({ id }) => {
  return (
    <Layout id={id}>
      <Stack
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        pt="20px"
      >
        <Stack direction="row" width="80%" justifyContent="center" spacing={8}>
          <Stack width="30%">
            <Typography variant="h1Bold" color="#009ADE">
              Hi I am,
            </Typography>
            <Typography variant="h1Bold" color="#009ADE">
              Aryan Jaiswal
            </Typography>
            <Typography variant="h6Bold" color="#009ADE">
              Software Development Engineer
            </Typography>
            <Stack>
              <Typography variant="body1" color="#54B1DA">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                placeat quo ex impedit nostrum facilis omnis deleniti quia dolor
                illo?
              </Typography>
            </Stack>
            <Stack mt="20px">
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
            component="img"
            src="/assests/aryan.jpg"
            alt="DP"
            sx={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              border: "4px solid #009ADE",
            }}
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
