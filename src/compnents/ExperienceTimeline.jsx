import { Timeline } from "@mui/lab";
import TimelineCard from "./TimeLineCard";
import experience from "../constants/experience";
const ExperienceTimeline = () => {
  return (
    <Timeline
      position="alternate"
      sx={{
        width: { xs: "600px", md: "80%", lg: "80%" },
        alignItems: "center",
      }}
    >
      {experience.map((item) => {
        return (
          <TimelineCard
            key={item.id}
            profile={item.profile}
            company={item.company}
            tasks={item.tasks}
            duration={item.duration}
            src={item.src}
          />
        );
      })}
    </Timeline>
  );
};

export default ExperienceTimeline;
