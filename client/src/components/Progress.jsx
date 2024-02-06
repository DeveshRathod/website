import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const SkillsProgressBar = ({ skill, progress }) => {
  return (
    <div
      style={{ width: "100%", marginBottom: "20px" }}
      className=" font-customFont"
    >
      <Typography variant="subtitle1" sx={{ fontSize: ["15px", "18px"] }}>
        {skill}
      </Typography>
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={100}
        sx={{
          marginTop: "5px",
          "& .MuiLinearProgress-bar2Buffer": {
            backgroundColor: "#d2edab",
          },
          "& .MuiLinearProgress-bar1Buffer": {
            backgroundColor: "#7ebd01",
          },
        }}
      />
    </div>
  );
};

const Progress = () => {
  return (
    <div>
      <SkillsProgressBar skill="React" progress={80} />
      <SkillsProgressBar skill="Nodejs" progress={80} />
      <SkillsProgressBar skill="MongoDB" progress={80} />
      <SkillsProgressBar skill="GitHub" progress={60} />
      <SkillsProgressBar skill="Tailwind CSS" progress={70} />
    </div>
  );
};

export default Progress;
