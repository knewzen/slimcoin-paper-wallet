import React from "react";
import MinimalProgress from "./MinimalProgress.js";
import MinimalHighlight from "./MinimalHighlight.js";
import MinimalMessage from "./MinimalMessage.js";

const SeedBlock = (props) => {

  let { progress, data, } = props;
  progress = progress || 0.0;

  return(
    <div className="container mhvcenter">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half">
          <MinimalHighlight>{data}</MinimalHighlight>
          <MinimalProgress val={progress} max={100} />

          <article className="message is-dark is-small">
            <MinimalMessage>
              move your mouse pointer around to add some randomness
            </MinimalMessage>
          </article>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );

};

export default SeedBlock;
