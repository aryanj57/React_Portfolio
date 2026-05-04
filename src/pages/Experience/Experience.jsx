import { Stack, Typography } from "@mui/material";
import ExperienceTimeline from "../../compnents/ExperienceTimeline";
import Section from "../../compnents/Section";

const Experience = ({ id }) => {
  return (
    <Section id={id}>
      <Stack
        pt="20px"
        alignItems="center"
        width="100%"
        height="100%"
        display="flex"
      >
        <Typography variant="h1Bold">Experience</Typography>
        <Typography
          variant={{ xs: "subtitle2", md: "h6", lg: "h6" }}
          color="text.secondary"
          textAlign={{ xs: "center", md: "", lg: "" }}
          width={{ xs: "80%", md: "100%", lg: "100%" }}
          mt="20px"
        >
          This timeline here shows my professional journey, highlighting key
          milestones and achievements.
        </Typography>
        <Stack
          width="80%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ExperienceTimeline />
        </Stack>
      </Stack>
    </Section>
  );
};

export default Experience;
