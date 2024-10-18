import React, { useState, useEffect } from "react";
import Allcard from "./allcardcontent";
import Card from "./Card";

function Jobsuggestion() {
  const [database, setdatabase] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/seggestedjobs")
      .then((res) => res.json())
      .then((data) => {
        setdatabase(data);
      });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1
          className="text-center"
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "black",

            paddingTop: "30px",
          }}
        >
          Suggested Jobs
        </h1>
      </div>
      <div className="d-flex justify-content-end">
        <a href="show" id="show-all">
          Show all
        </a>
      </div>
      {/* <div>
        <Allcard />
      </div> */}
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0"></div>
        {database.map((listing, i) => (
          <Card key={i} listing={listing}></Card>
        ))}
      </div>
    </>
  );
}

export default Jobsuggestion;
