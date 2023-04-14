import { useState } from "react";
// import Header from "../components/Header";
import { Link } from 'react-router-dom'

function About() {
  return (

    <div>

      <section className="about" id="about">
        <div className="about-content">
          <div className="about-text">
            <h1>Nice to meet you,</h1>
            <h1>I am Lala,</h1>

            <h2>
              <span>a software engineer.</span>
            </h2>

            <span id="more-about">
              <p>A little bit about me...</p>
            </span>

            <p>
              (write here)
            </p>

            <br />

            </div>
          <div className="about-img">
              {/* <img style={{ width: "100px" }} src={require("../avatar.jpg")} alt="logo"></img> */}
              <img style={{ width: "100px" }} src={require("../avatar.jpg")} alt="placeholder img"></img>
          </div>

        </div>
      </section>

    </div>

  );
}

export default About;