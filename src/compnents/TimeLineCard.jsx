import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Collapse, Stack, Typography, useTheme } from "@mui/material";
import { useCallback, useRef, useState } from "react";

const TimeLineCard = ({ profile, company, tasks, duration, src, isLast }) => {
  const [showInfo, setShowInfo] = useState(false);
  const timeoutRef = useRef(null);
  const theme = useTheme();

  const handleMouseEnter = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowInfo(true), 500);
  }, []);

  const handleMouseLeave = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setShowInfo(false);
  }, []);

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
      >
        {duration}
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: theme.palette.primary.main }} />
        <TimelineDot
          sx={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            m: 0,
          }}
        >
          <Box
            component="img"
            src={src}
            alt={company}
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: `3px solid ${theme.palette.primary.main}`,
            }}
          />
        </TimelineDot>

        <TimelineConnector
          sx={{
            bgcolor: theme.palette.primary.main,
            position: "relative",
            ...(isLast && {
              //only on last card
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: `10px solid ${theme.palette.primary.main}`,
              },
            }),
          }}
        />
      </TimelineSeparator>

      <TimelineContent sx={{ mt: { xs: "40px", md: 0 } }}>
        <Stack
          spacing="4px"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Typography variant="h6Bold">{profile}</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {company}
          </Typography>
        </Stack>

        <Collapse in={showInfo}>
          <Stack spacing="8px" mt="12px" display={{ xs: "none", md: "flex" }}>
            {tasks.map((task, i) => (
              <Typography key={i} variant="subtitle2">
                {task}
              </Typography>
            ))}
          </Stack>
        </Collapse>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimeLineCard;
