import React from "react";


const MinimalButton = (props) => {

	let { inverted, onClick, children, padded, } = props;
	let invertedClass = inverted === true?"minverted":"";
  padded = padded === true?"mpadded":"";
  onClick = onClick || (() => {});

	return (
		<a href="#" onClick={onClick} className={`mbutton ${invertedClass} ${padded}`}>
      {children}
		</a>
	);

};

export default MinimalButton;
