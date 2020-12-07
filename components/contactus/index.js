import React from "react";
import Link from "next/link";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactUs = () => (
  <main>
    <div class="h__banner">
      <div class="banner-breadcrumb">
        <img src="../assets/client/img/quiz.jpg" />
        <div class="banner-desc text-center">
          <h1> Contact Us</h1>
          <ul id="breadcrumbs">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <section class="tour-contact">
      <div class="container">
        <div class="row justify-content-center mt-5">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  </main>
);

export default ContactUs;
