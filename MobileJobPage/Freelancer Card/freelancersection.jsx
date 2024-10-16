import React from "react";

import Fcard1 from "./f-Card1";
import Fcard2 from "./f-card2";

export default function Freelancer() {
  return (
    <div
      style={{
        padding: "15px",
      }}
    >
      <div className="d-flex justify-content-center">
        <h1
          className="text-center"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "black",
            padding: "10px",
            paddingTop: "40px",
          }}
        >
          Freelancer Jobs For You
        </h1>
      </div>
      <div className="d-flex justify-content-end">
        <a href="show" id="show-all">
          Show all
        </a>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 lg-3 mb-sm-0">
          <Fcard1 />
        </div>

        <div className="col-sm-6">
          <Fcard2 />
        </div>
      </div>
    </div>
  );
}
