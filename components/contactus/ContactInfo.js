import React from "react";

import {
  faEnvelope,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = (_) => (
  <div class="col-md-5 mb-4">
    <div class="contact-info">
      <div class="contact-heading">
        <h2>Contact info</h2>
      </div>
      <div class="contact-icons">
        <span>
          <FontAwesomeIcon icon={faEnvelope} height="20" color="#22346f" />
          &nbsp; somewhere@gmail.com
        </span>
        <hr />

        <span>
          <FontAwesomeIcon icon={faMobileAlt} height="20" color="#22346f" />
          &nbsp; +977-9831232343, 1(000)23465
        </span>
        <hr />
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} height="20" color="#22346f" />
          &nbsp; Power Street, Baluwatar, Kathmandu
        </span>
      </div>
      <div class="contact-heading mt-4">
        <h2>Map</h2>
      </div>
      <div class="map">
        <iframe
          class="w-100 border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.626022186586!2d85.33051661548235!3d27.72883083115355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193e2999d78d%3A0xbc123cbd100b3126!2sTOP%20Nepal%20International%20pvt.ltd.!5e0!3m2!1sen!2snp!4v1580811390887!5m2!1sen!2snp"
          height="250"
        />
      </div>
    </div>
  </div>
);

export default ContactInfo;
