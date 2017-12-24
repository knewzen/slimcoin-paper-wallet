import React from "react";

const MinimalProgress = (props) => {

  let { val, max, } = props;

  return (
    <progress className="progress is-small mprogress" value={val} max={max}>
      {Math.floor((val*100)/max)}%
    </progress>
  );

};

export default MinimalProgress;
