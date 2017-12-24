import React from "react";

const MinimalQR = (props) => {

  let { val, } = props;

  return (
    <div className="box">
      <img src="./assets/public.jpg" className="image is-128x128" alt={val} />
    </div>
  );

};

export default MinimalQR;
