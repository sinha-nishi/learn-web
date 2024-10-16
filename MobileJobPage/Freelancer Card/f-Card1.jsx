import React from "react";

export default function Fcard1() {
  return (
    <div className="card">
      <div
        className="card-body"
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          boxShadow: "1px 1px 0px",
          borderRadius: "10px",
          paddingRight: "164px",
        }}
      >
        <p
          style={{ marginLeft: "10px", fontWeight: "bold" }}
          className="card-title"
        >
          Company Name:
        </p>
        <div className="card-subtitle">
          <p
            style={{
              marginLeft: "12px",
              fontWeight: "bold",
              paddingTop: "10px",
            }}
          >
            Project Name:
          </p>
        </div>
        <div className="row">
          <div className=" card-text ">
            <p style={{ marginLeft: "12px", fontWeight: "bold" }}>Duration:</p>
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-primary"
                // style={{ marginLeft: "200px" }}
              >
                ApplyNow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
