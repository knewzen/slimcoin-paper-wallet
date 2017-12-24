import React from "react";

const MinimalHero = (props) => {

  let { theme, children, } = props;
  theme = theme || "dark";

  return (
    <section className={`hero is-${theme} is-bold`}>
      <div className="hero-body">
        <div className="container">
          {children}
        </div>
      </div>
    </section>
  );

};

export default MinimalHero;
