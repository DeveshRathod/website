import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, CardActions, IconButton } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useSetRecoilState } from "recoil";
import { projectState } from "../store/projectState";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const setProject = useSetRecoilState(projectState);

  const handleClick = () => {
    setProject(project);
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="card-container cursor-pointer" onClick={handleClick}>
      <Card sx={{ maxWidth: 355 }}>
        <CardMedia
          component="img"
          height="194"
          image={project.image}
          alt="Website Image"
        />
        <div className="p-3">
          <div>{project.title}</div>
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
