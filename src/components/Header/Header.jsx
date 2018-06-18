import React from 'react';
import { css } from 'emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const wrapper = css`
  background: grey;
  margin-bottom: 15px;
`;
const inner = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px 15px;
  max-width: 1000px;
`;

const projectName = css`
  color: white;
  font-size: 20px;
`;

const actions = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const icon = css`
  margin-right: 15px;
  color: white;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const Header = () => {
  return (
    <div className={wrapper}>
      <div className={inner}>
        <div className={projectName}>Mega Project</div>
        <div className={actions}>
          <FontAwesomeIcon className={icon} size="2x" icon="list-alt" />
          <FontAwesomeIcon className={icon} size="2x" icon="edit" />
          <FontAwesomeIcon className={icon} size="2x" icon="user-circle" />
        </div>
      </div>
    </div>
  );
};

export default Header;