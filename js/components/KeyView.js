import React from "react";
import MinimalQR from "./MinimalQR.js";
import MinimalHero from "./MinimalHero.js";

const KeyView = (props) => {

  let { pub, val, } = props;
  let blockTitle = "Public Address";
  let heroTheme = "dark";

  if (pub === false) {
    blockTitle = "Private Key";
    heroTheme = "primary";
  }

  return (
    <MinimalHero theme={heroTheme}>
      <div className="columns is-vcentered">
        <div className="column key-panel">
          <h1 className="title">
            {blockTitle}
          </h1>
          <h2 className="subtitle">
            {val}
          </h2>
        </div>

        <div className="column is-narrow" >
          <MinimalQR val={val} />
        </div>
      </div>
    </MinimalHero> 
  );

};

export default KeyView;
