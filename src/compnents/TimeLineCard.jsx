import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

const TimeLineCard = ({ profile, company, tasks, duration, src }) => {
  const [showInfo, setShowInfo] = useState(false);

  let timeoutId;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setShowInfo(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowInfo(false);
  };

  const theme = useTheme();
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="typoSubheading"
      >
        {duration}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: theme.palette.primary.main }} />
        <TimelineDot
          sx={{
            width: "40px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            m: "0px",
          }}
        >
          <Box
            component="img"
            src={src}
            alt="DP"
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: `3px solid ${theme.palette.primary.main}`,
            }}
          />
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: theme.palette.primary.main }} />
      </TimelineSeparator>
      <TimelineContent>
        <Stack
          spacing="4px"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Typography variant="h6Bold" color="typoHeading">
            {profile}
          </Typography>
          <Typography variant="subtitle2" color="typoSubheading">
            {company}
          </Typography>
        </Stack>

        {showInfo && (
          <Stack spacing="8px" mt="12px">
            {tasks.map((task) => {
              return (
                <Typography variant="subtitle2" color="typoGrey">
                  {task}
                </Typography>
              );
            })}
          </Stack>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimeLineCard;
