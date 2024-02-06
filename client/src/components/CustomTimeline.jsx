import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import data from "../utils/data/courses.json";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";
import BackpackIcon from "@mui/icons-material/Backpack";

const getIconForCourse = (courseType) => {
  switch (courseType) {
    case "BE":
      return <EngineeringIcon />;
    case "HSC":
      return <SchoolIcon />;
    case "SSC":
      return <BackpackIcon />;
    default:
      return null;
  }
};

const CustomTimeline = () => {
  return (
    <Timeline position="alternate" className=" pt-10">
      {data.map((course, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.dark"
          >
            {course.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ background: "#7ebd01" }} />
            <TimelineDot sx={{ color: "white", background: "#7ebd01" }}>
              {getIconForCourse(course.name)}
            </TimelineDot>
            <TimelineConnector sx={{ background: "#7ebd01" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: ["12px", "18px"],
                fontFamily: '"Poppins", sans-serif',
              }}
              component="span"
            >
              {course.name} {course.institute_name}
            </Typography>
            <Typography
              sx={{
                fontSize: ["12px", "18px"],
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              {course.Branch}
            </Typography>
            <Typography
              sx={{
                fontSize: ["12px", "18px"],
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              {course.SGPA}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CustomTimeline;
