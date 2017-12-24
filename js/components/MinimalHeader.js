import React from "react";
import PropTypes from 'prop-types';

const MinimalHeader = (props) => {

  let { children, } = props;

  return (
    <nav className="container mheader">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            {children[0]}
          </div>
        </div>

        <div className="level-right">
          {children.slice(1)}
        </div>
      </div>
    </nav>
  );

};

MinimalHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MinimalHeader;
