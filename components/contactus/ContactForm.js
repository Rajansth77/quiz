import React from "react";
import InputField from "components/common/InputField";

const ContactForm = (_) => (
  <div class="col-md-5 mb-4">
    <div class="contact-info">
      <div class="contact-heading">
        <h2>Get In Touch </h2>
      </div>
      <form>
        <InputField placeholder="Name" id="firstName" label="Name" required />
        <InputField
          placeholder="Email"
          id="email"
          label="Email"
          required
          type="email"
        />
        <InputField
          placeholder="subject"
          id="subject"
          label="Subject"
          required
        />

        <div class="formcontainer">
          <textarea type="text" id="message" placeholder="message" rows="10" />
          <label for="message" placeholder="Message">
            Message
          </label>
        </div>
        <button type="submit" class="btn-submit">
          Submit
        </button>
      </form>
    </div>
  </div>
);

export default ContactForm;
