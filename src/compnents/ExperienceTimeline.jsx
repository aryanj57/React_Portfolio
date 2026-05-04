import { Timeline } from "@mui/lab";
import experience from "../constants/experience";
import TimelineCard from "./TimeLineCard";
const ExperienceTimeline = () => {
  return (
    <Timeline
      position="alternate"
      sx={{
        width: { xs: "600px", md: "80%", lg: "80%" },
        alignItems: "center",
      }}
    >
      {experience.map((item, index) => {
        return (
          <TimelineCard
            key={item.id}
            profile={item.profile}
            company={item.company}
            tasks={item.tasks}
            duration={item.duration}
            src={item.src}
            isLast={index === experience.length - 1}
          />
        );
      })}
    </Timeline>
  );
};

export default ExperienceTimeline;
