import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobListing from "../components/JobListing";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobListing></JobListing>
      <Footer />
    </div>
  );
}

export default Home;
