import React from "react";
import Layout from "../../compnents/Layout";
import { Stack, Typography } from "@mui/material";
import ExperienceTimeline from "../../compnents/ExperienceTimeline";

const Experience = ({ id }) => {
  return (
    <Layout id={id}>
      <Stack pt="20px" alignItems="center" width="100%" height="100%">
        <Typography variant="h1Bold" color="typoHeading">
          Experience
        </Typography>
        <Typography variant="h6" color="typoSubheading">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aperiam!
        </Typography>
        <ExperienceTimeline />
      </Stack>
    </Layout>
  );
};

export default Experience;
