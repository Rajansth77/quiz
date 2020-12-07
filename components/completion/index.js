import React from "react";

import InputField from "components/common/InputField";

const Completion = () => (
  <main style={{ background: "#f3f3f3" }}>
    <div className="container p-0">
      <div className="completion_background">
        <div className="score">
          <span> Total Score </span>
          <p> 100 / 100</p>
          <span> Achievement </span>
          <p> Satitsfactory </p>
        </div>
        <div className="finish__form ">
          <h2 className="text-center"> CONGRATULATIONS </h2>
          <p className="text-center">
            Provide us your details and we will email yous
          </p>
          <form>
            <InputField label="Email" id="email" required />

            <InputField
              label="Password"
              id="password"
              required
              type="password"
            />
            <button className="btn btn-success btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="share__now">
          <p className="text-center"> Share Now </p>

          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
    </div>
  </main>
);

export default Completion;
