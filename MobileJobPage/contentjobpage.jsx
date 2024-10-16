import React from "react";

import Searchbar from "../components/SearchBar/searchbar";

export default function Contentjob() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1
          className="text-center"
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#741AC4",
            padding: "30px",
          }}
        >
          We Search the right Job For You
        </h1>
      </div>
      <div>
        <Searchbar />
      </div>
      {/* <div>
        <Jobcat />
      </div>
      <section className="d-lg-none d-sm-flex ">
        <Notification />
      </section>
      <div>
        <Jobsuggestion />
      </div> */}
    </div>
  );
}
