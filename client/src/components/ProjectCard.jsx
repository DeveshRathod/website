import React from "react";
import { Card, CardMedia, CardActions, IconButton } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const ProjectCard = ({ project }) => {
  return (
    <div className="card-container cardHover">
      <Card sx={{ maxWidth: 355 }}>
        <CardMedia
          component="img"
          height="194"
          image={project.image}
          alt="Website Image"
        />
        <div className="p-3">
          <div className=" font-semibold">{project.title}</div>
          <div>{project.description}</div>
          <div className="flex w-fit gap-1 mt-1">
            {project.tech_stack.map((tech, i) => (
              <button
                className="p-1 rounded-lg bg-customColor text-xs text-white"
                key={i}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <CardActions disableSpacing>
          <IconButton>
            <a href={project.repo_url} className="w-full">
              <CodeIcon />
            </a>
          </IconButton>
          <IconButton>
            <a href={project.demo_url} className="w-full">
              <RemoveRedEyeIcon />
            </a>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
