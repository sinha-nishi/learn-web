import React from "react";

export default function Notification() {
  return (
    <>
      <div className="text-center">
        <h1
          style={{
            paddingTop: "30px",
            fontSize: "16px",
            fontWeight: "lighter",
          }}
        >
          Profile Performance
        </h1>
      </div>
      <div
        className="d-flex justify-content-center "
        // style={{ paddingTop: "40px" }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px 5px",
            boxShadow: "1px 1px 0px ",
            paddingTop: "20px",
            border: "solid 1px",
          }}
        >
          <span style={{ fontSize: "20px", paddingLeft: "26px" }}>
            0
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-dot"
              viewBox="0 0 35 35"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
          </span>
          <div className="d-flex ">
            <span
              style={{ fontSize: "16px", padding: "9px", fontWeight: "bold" }}
            >
              {" "}
              Applied Jobs{" "}
            </span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px 5px",
            boxShadow: "1px 1px 0px ",
            paddingTop: "20px",
            marginLeft: "5px",
            border: "solid 1px",
          }}
        >
          <span style={{ fontSize: "20px", paddingLeft: "29px" }}>
            0
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-dot"
              viewBox="0 0 35 35"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
          </span>
          <div>
            <p style={{ fontSize: "16px", padding: "7px", fontWeight: "bold" }}>
              Resume Update
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px 5px",
            boxShadow: "1px 1px 0px ",
            paddingTop: "20px",
            marginLeft: "5px",
            border: "solid 1px",
          }}
        >
          <span style={{ fontSize: "20px", paddingLeft: "40px" }}>
            0
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-dot color"
              viewBox="0 0 35 35"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
          </span>
          <div>
            <p style={{ fontSize: "16px", padding: "9px", fontWeight: "bold" }}>
              Messages
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
