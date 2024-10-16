import React from "react";

export default function Card(props) {
  const { listing } = props;

  return (
    // <div
    //   style={{
    //     backgroundColor: "white",
    //     border: "1px solid black",
    //     boxShadow: "1px 1px 0px",
    //     borderRadius: "10px",
    //   }}
    // >
    <div className="row justify-content-center" style={{ paddingTop: "20px" }}>
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{listing.companyName}</h5>
            <p className="card-text">{listing.post}</p>
            <a href="apply" className="btn btn-primary">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
