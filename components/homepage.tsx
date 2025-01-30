import React from "react";

interface ProjectProps {
  proj: {
    title: string;
    list: string[];
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ proj }) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border-base-100 mb-2 bg-base-100 border"
    >
      <div className="collapse-title text-2xl font-medium">
        {proj.title}
      </div>
      <div className="collapse-content">
        {proj.list.length > 0 && <p className="whitespace-pre">{proj.list[0]}</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
