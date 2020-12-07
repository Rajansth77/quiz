import React from "react";
import Link from "next/link";

const HeroComponent = ({ description = des }) => (
  <div className="head__banner">
    <div className="banner-container">
      <img src="../assets/client/img/quiz.jpg" />

      <div className="banner-desc">
        <h1> QUIZ YOURSELF </h1>
        <p>{description}</p>
        <Link href="/quiz">
          <a className="link-button">Take Quiz Now</a>
        </Link>
      </div>
    </div>
  </div>
);
export default HeroComponent;

const des = `Bring out the intelligence in you right now. Lorem ipsum, dolor sit
amet consectetur adipisicing elit. Nulla ad ab eius, explicabo ducimus
voluptatibus`;
