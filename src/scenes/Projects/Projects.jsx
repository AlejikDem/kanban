import React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

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

const newProject = css`
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: green;
  cursor: pointer;
`;

const Projects = ({ projects }) => {
  return (
    <div className={wrapper}>
      <div>
        <div className={title}>Projects</div>
        <div>
          {projects.map(item => (
            <Link key={item.id} to="/project" className={project}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <FontAwesomeIcon
        icon="plus-circle"
        size="4x"
        className={newProject}
      />
    </div>
  );
};

export default Projects;