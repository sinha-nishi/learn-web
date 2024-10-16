import React from "react";
import design from "../../assets/design.png";
import technology from "../../assets/technology.png";
import finance from "../../assets/finance.png";
import marketing from "../../assets/marketing.png";

export default function Jobcat() {
  return (
    <>
      <div style={{ paddingTop: "30px" }}>
        <div className="d-flex  justify-content-center">
          {/* design */}
          <div
            style={{
              backgroundColor: "#F2EAE1",
              padding: "20px",
              // marginLeft: "6px",
            }}
            className="rounded-circle"
          >
            {/* image of design */}
            <div>
              <img
                src={design}
                alt="design"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>
          {/* end of design */}

          {/* technology */}
          <div
            style={{
              backgroundColor: "#E0EAFF",
              padding: "20px",
              // marginLeft: "6px",
            }}
            className="rounded-circle"
          >
            {/* image of tech */}
            <div>
              <img
                src={technology}
                alt="technology"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>
          {/* end of technology */}

          {/* finance */}
          <div
            style={{
              backgroundColor: "#F0EBFF",
              padding: "20px",
              // marginLeft: "6px",
            }}
            className="rounded-circle"
          >
            {/* imag of finance */}
            <div>
              <img
                src={finance}
                alt="finance"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>
          {/* end of finance */}

          {/* marketing */}
          <div
            style={{
              backgroundColor: "#FFE9E8",
              padding: "20px",
              // marginLeft: "6px",
            }}
            className="rounded-circle"
          >
            {/* image of marketing  */}
            <div>
              <img
                src={marketing}
                alt="marketing"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>
          {/* end of marketing  */}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <a href="design" style={{ textDecoration: "none" }}>
          <span
            style={{
              paddingLeft: "11px",
              color: "black",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Design
          </span>
        </a>
        <a href="technology" style={{ textDecoration: "none" }}>
          <span
            style={{
              paddingLeft: "11px",
              color: "black",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Technology
          </span>
        </a>
        <a href="Marketing" style={{ textDecoration: "none" }}>
          <span
            style={{
              paddingLeft: "11px",
              color: "black",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Marketing
          </span>
        </a>
        <a href="finance" style={{ textDecoration: "none" }}>
          <span
            style={{
              paddingLeft: "11px",
              color: "black",
              fontWeight: "700",
            }}
          >
            Finance
          </span>
        </a>
      </div>
    </>
  );
}
