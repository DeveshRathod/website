import React from "react";
import { useRecoilValue } from "recoil";
import { projectState } from "../store/projectState"; // Adjust the path

const ProjectDetails = () => {
  const project = useRecoilValue(projectState);
  console.log(project);

  return <div>{/* Render project details here */}</div>;
};

export default ProjectDetails;
