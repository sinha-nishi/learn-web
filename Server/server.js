// import Jobpageview from "../src/MobileJobPage/Jobpageview";

const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// app.get("/api", (req, res) => {
//   res.json({ users: ["userOne", "userTwo", "userThree"] });
// });
app.get("/JobSearch", (req, res) => {
  const jobssearch = JSON.parse(fs.readFileSync("searchjobs.json", "utf8"));
  const results = jobssearch.filter(
    (job) => job.sector === req.query.companytype,
    (job) => job.location === req.query.companylocal
  );

  res.json(results);
});

app.get("/seggestedjobs", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("jobs.json", "utf8")));
});

app.get("/postjobs", (req, res) => {
  const jobs = JSON.parse(fs.readFileSync("jobs.json", "utf8"));
  const companyName = req.query.company;
  const title = req.query.title;
  jobs.push({ companyName, post: title });
  fs.writeFileSync("jobs.json", JSON.stringify(jobs), "utf8");
  res.json(jobs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
