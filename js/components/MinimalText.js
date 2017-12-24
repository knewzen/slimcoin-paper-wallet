import React from "react";

const MinimalText = (props) => {

  let { inverted, children, } = props;
  let invertedClass = inverted === true?"minverted":"";

  return (
    <span className={`mtext ${invertedClass}`}>{children}</span>
  );

};

export default MinimalText;
