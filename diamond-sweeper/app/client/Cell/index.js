import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ id, className, handleClick }) => (
  <div className="cell-wrapper">
    <div id={id} onClick={handleClick} className={className} />
  </div>
);

Cell.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Cell;
