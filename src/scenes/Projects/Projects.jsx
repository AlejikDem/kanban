import React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

const wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const title = css`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
`;

const project = css`
  display: flex;
  align-items: center;
  width: 340px;
  padding: 5px 10px;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
  background: #d6eff7;
  border: 1px solid black;
`;

const Projects = () => {
  return (
    <div className={wrapper}>
      <div>
        <div className={title}>Projects</div>
        <div>
          <Link to="/project" className={project}>
            Project 1
          </Link>
          <Link to="/project" className={project}>
            Project 2
          </Link>
          <Link to="/project" className={project}>
            Project 3
          </Link>
          <Link to="/project" className={project}>
            Project 4
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;