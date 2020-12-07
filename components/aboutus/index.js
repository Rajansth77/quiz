import React from "react";
import Link from "next/link";

import AboutUsComponent from "components/home/AboutUsComponent";

const AboutUs = () => (
  <main>
    <div class="h__banner">
      <div class="banner-breadcrumb">
        <img src="../assets/client/img/quiz.jpg" />
        <div class="banner-desc text-center">
          <h1> About Us</h1>
          <ul id="breadcrumbs">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <AboutUsComponent isComplete />
  </main>
);

export default AboutUs;
