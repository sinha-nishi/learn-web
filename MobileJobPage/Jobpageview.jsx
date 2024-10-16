import React from "react";

import Contentjob from "./contentjobpage";
import Jobcat from "./jobcat";
import Notification from "./notificationsection";
import "./mobilejobpage.css";

import Jobsuggestion from "./JobSuggestionCards/jobsuggestion";
import Freelancer from "./Freelancer Card/freelancersection";

import Otherproducts from "./OtherJobProducts/otherproducts";
import MobileJobNav from "../components/MobilejobpageNav/jobnav";
import Footer1 from "../components/Footer Awsar/Footer1";

import Assistedbanner from "./ServicesSection/assistedbanner";
import UserTips from "../home/MobileHomepage/home page all sections/tipssection";

export default function Jobpageview() {
  return (
    <>
      <header>
        <MobileJobNav />
      </header>
      <main className="Job-App">
        <section>
          <Contentjob />
        </section>
        <section>
          <Jobcat />
        </section>{" "}
        <section>
          <Notification />
        </section>
        <section>
          <Jobsuggestion />
        </section>
        <section>
          <Freelancer />
        </section>
        <section>
          <Assistedbanner />
        </section>
        <section>
          <UserTips />
        </section>
        <section>
          <Otherproducts />
        </section>
      </main>
      <footer id="footer-main">
        <Footer1 />
      </footer>
    </>
  );
}
