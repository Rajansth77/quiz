import React from "react";

const WhatWeDo = ({ whatWeDo = wwd }) => (
  <div className="we_are__section">
    <div className="container">
      <h2 className="heading-second"> WHAT WE DO </h2>
      <p className="heading-paragraph">{whatWeDo?.description}</p>
      <div className="container p-0 mb-5">
        <div className="row">
          {whatWeDo?.services?.map((service, idx) => (
            <ServiceCard {...service} idx={`service-idx-${idx}`} />
          ))}
        </div>
      </div>
      <div className="about__image__text__holder">
        <div className="about__text"></div>
      </div>
    </div>
  </div>
);

export default WhatWeDo;

const wwd = {
  description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus
  quod maiores obcaecati eos illum aliquam quidem iste. Facere accusantium
  excepturi at consectetur nesciunt natus magni quo ipsam dolores?
  Architecto fugiat nisi impedit laudantium hic soluta corrupti, id sit
  possimus?`,
  services: [
    {
      title: "Lorem Ipsum",
      detail: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum neque
    ad quos, suscipit obcaecati!`,
    },
    {
      title: "Lorem Ipsum",
      detail: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum neque
    ad quos, suscipit obcaecati!`,
    },
    {
      title: "Lorem Ipsum",
      detail: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum neque
    ad quos, suscipit obcaecati!`,
    },
  ],
};

const ServiceCard = ({ title, detail }) => (
  <div className="col-md-4 m-pad">
    <div className="services-wrap text-center">
      <i className="feather-globe" aria-hidden="true" />
      <h2>{title} </h2>
      <p>{detail}</p>
    </div>
  </div>
);
