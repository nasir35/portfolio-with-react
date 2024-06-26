import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container">
      <br />
      <div className="bar html" data-skill="HTML5">
        {" "}
        <span style={{ color: "#424086" }} className="text-base px-3">
          80%
        </span>
      </div>
      <div className="bar css" data-skill="CSS3">
        <span style={{ color: "#424086" }} className="text-base px-3">
          65%
        </span>
      </div>
      <div className="bar tailwind" data-skill="Tailwind">
        <span style={{ color: "#B2C9C6" }} className="text-base px-3">
          75%
        </span>
      </div>
      <div className="bar lightsky js" data-skill="JavaScript">
        <span style={{ color: "#4aa4ca" }} className="text-base px-3">
          70%
        </span>
      </div>
      <div className="bar darksky react" data-skill="React">
        <span style={{ color: "#6188c1" }} className="text-base px-3">
          60%
        </span>
      </div>
      <div className="bar mongodb" data-skill="MongoDB">
        <span style={{ color: "#6188c1" }} className="text-base px-3">
          50%
        </span>
      </div>
    </div>
  );
};

export default Skills;
