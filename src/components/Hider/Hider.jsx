import React from 'react';
import { css } from 'emotion';

const hider = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Hider = ({ showHider }) => {
  return showHider ? <div className={hider} /> : null;
};

export default Hider;