import React from "react";
import { Link } from "react-router-dom";

export default function Assistedbanner() {
  return (
    <div>
      <div className="row assist">
        <div className="col-md-5 col-sm-12 img-fluid">
          <img
            src="https://learnsql.com/blog/sql-joins-types-explained/JOIN-s.png "
            alt="join"
            style={{ width: "300px", height: "200px", borderRadius: "50%" }}
            className="img-fluid"
          />
        </div>
        <div className="col-md-7 col-sm-12">
          <h1 style={{ color: "white" }}>
            Lets start joining with our Assisted Features
          </h1>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa risus
            est sed amet.
          </p>
          <div className="row d-flex">
            <div>
              <Link to="/JobAssistForm">
                <buttom type="button" className="btn btn-outline-success">
                  Get Started
                </buttom>
              </Link>

              <a href="learnmore">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  style={{ margin: "20px" }}
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-short d-flex"
                    viewBox="0 0 16 16"
                    style={{ color: "white" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
