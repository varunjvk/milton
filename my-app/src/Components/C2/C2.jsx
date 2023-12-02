import "./C2.css";

import React from "react";

const C2 = ({ s1, s2, s3, s4, s5, s6, s7, b1, b2, b3, img1, img2,flag }) => {
  return (
    <div className="c2-container" style={{ flexDirection: "row" }}>
      <div className="c2-left">
        <span className="tag">{s1}</span>
        <span>
          {" "}
          {s2}
          <br />
          {s3}
        </span>
        <span>
          {s4} <br /> {s5}
          <br /> {s6}
          <br /> {s7}
        </span>
        <div className={flag?"left-bubble":"left-bubble right-bubble"}>
          <img src={img1} alt="" />
          <div>
            <span>
              {b1}
              <br /> {b2}
            </span>
            <span>{b3}</span>
          </div>
        </div>
      </div>
      <div className="c2-right">
        <img src={img2} alt="" width={600} />
      </div>
    </div>
  );
};

export default C2;
