import React from "react";

const MinimalMessage = (props) => {

  return (
    <div className="message-body has-text-centered mmessage">
      {props.children}
    </div>
  );

};

export default MinimalMessage;
