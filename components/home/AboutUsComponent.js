import React from "react";

import Link from "next/link";

const AboutUsComponent = ({ aboutUs = about, isComplete = false }) => (
  <div className="about__section">
    <div className="container">
      {isComplete ? null : <h2 className="heading-second"> ABOUT US </h2>}
      <div className="row">
        <div className="col-md-6 my-4">
          <div className="about__image">
            <img src="../assets/client/img/quiz.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-6 my-4">
          <div
            className="about__text"
            dangerouslySetInnerHTML={{ __html: aboutUs }}
          />
          {isComplete ? null : (
            <Link href="/about">
              <a className="link-button mt-4">Know More</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default AboutUsComponent;

const about = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
ducimus quod maiores obcaecati eos illum aliquam quidem iste. Facere
accusantium excepturi at consectetur nesciunt natus magni quo ipsam
dolores? Architecto fugiat nisi impedit laudantium hic soluta
corrupti, id sit possimus? Focus on <br /> <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
ducimus quod maiores obcaecati eos illum aliquam quidem iste. Facere
accusantium excepturi at consectetur nesciunt natus magni quo ipsam
dolores? Architecto fugiat nisi impedit laudantium hic soluta
corrupti, id sit possimus? Focus on`;
