import React from "react";
// import ProcessSection from "../../components/process/ProcessSection";

export default function Otherproducts() {
  return (
    <>
      <h1
        className="text-center"
        style={{ fontSize: "32px", fontWeight: "bold", paddingTop: "20px" }}
      >
        Our Other Products
      </h1>
      <div className="row">
        <div className="col-sm-12 col-md-6" style={{ paddingLeft: "36px" }}>
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/online-3412473_1920.jpeg "
            alt="learning"
            style={{ width: "350px", height: "350px" }}
            className="image-fluid"
          />
        </div>
        <div className="col-sm-12 col-md-6" style={{ padding: "35px" }}>
          <a href="learning">
            <h1 style={{ fontWeight: "bold", padding: "20px" }}>Learning</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm-12 col-md-6"
          style={{ paddingTop: "20px", paddingLeft: "36px" }}
        >
          <img
            src="https://images.ctfassets.net/pdf29us7flmy/Wrg0guWdgq0a423onf6S2/eea69ff098fa67f250f58fc848bd0bd2/-IND-004-073-_How_To_Create_a_Timeline_Final.jpg?w=720&q=100&fm=jpg "
            alt="learning"
            style={{ width: "350px", height: "350px" }}
          />
        </div>{" "}
        <div className="col-sm-12 col-md-6" style={{ padding: "35px" }}>
          <a href="ProductBoard">
            <h1 style={{ fontWeight: "bold" }}>Product Board</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
