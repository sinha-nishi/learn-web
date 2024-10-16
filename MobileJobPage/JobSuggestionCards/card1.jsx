import React from "react";

export default function Card1() {
  return (
    // <div
    //   style={{
    //     backgroundColor: "white",
    //     border: "1px solid black",
    //     boxShadow: "1px 0px 0px",
    //     borderRadius: "10px",
    //   }}
    // >
    <div className="card ">
      <div className="card-body">
        <h5 className="card-title">Company Name</h5>
        <p className="card-text">Ux/UI Design: Full Time</p>
        <a href="apply" className="btn btn-primary">
          Apply Now
        </a>
      </div>
    </div>
  );
}
