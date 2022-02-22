import React, { useEffect, useState } from "react";
import "./projects.scss";
import Project from "./Project/Project";
import { projects } from "../../data";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const list = projects.slice(0, showMore ? projects.length : 8);
    setProjectList(list);
  }, [showMore]);

  return (
    <>
      <div id="projects">
        <div className="projectWrapper">
          <h1 className="sectionTitle">Projects</h1>
          {projectList.map((proj, index) => (
            <div key={index} className="projItem" style={{ listStyle: "none" }}>
              <Project data={proj} />
            </div>
          ))}
        </div>
      </div>
      <span className="showMoreProj" onClick={() => setShowMore(!showMore)}>
        <>Show {showMore ? "less" : "more"}</>
        {showMore ? (
          <BsChevronCompactUp size={25} />
        ) : (
          <BsChevronCompactDown size={25} />
        )}
      </span>
    </>
  );
};

export default Projects;
