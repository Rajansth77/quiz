import React from "react";

import InputField, { RadioButton } from "components/common/InputField";

const Participate = () => (
  <main style={{ background: "#f3f3f3" }}>
    <div className="container p-0">
      <div className="completion_background">
        <div className="finish__form ">
          <h2> PARTICIPATE IN QUIZ </h2>
          <p>Provide us your details and we will email yous</p>
          <form>
            <div className="form-group row">
              <div className="col-md-12">
                <InputField label="Name" id="name" required />
                <InputField label="Phone" id="phone" required />
                <InputField label="Email" id="email" type="email" required />
              </div>
              <ParticipateRadioButtonGroup
                label="Age Group"
                id="ageGroup"
                options={[
                  { label: "Below 18", id: "<18" },
                  { label: "18-25", id: "18-25" },
                  { label: "25-35", id: "25-35" },
                  { label: "35-45", id: "35-45" },
                  { label: "45-55", id: "45-55" },
                  { label: "Above 55", id: "55+" },
                ]}
              />
              <ParticipateRadioButtonGroup
                label="Gender"
                id="gender"
                options={[
                  { label: "Male", id: "male" },
                  { label: "Female", id: "female" },
                  { label: "Others", id: "others" },
                ]}
              />
              <ParticipateRadioButtonGroup
                label="Language"
                id="language"
                options={[
                  { label: "Nepali", id: "nepali" },
                  { label: "English", id: "english" },
                ]}
              />
              <div className="col-sm-3">
                <label htmlFor="thematic" className="mt-2 pb-2">
                  Thematic Group
                </label>
              </div>
              <div className="col-sm-7 mt-2">
                <div className="form-row">
                  <select id="thematic" className="form-control">
                    <option> ----- Select One -----</option>
                    {[
                      "Election history",
                      "Democracy",
                      "Governance and Election",
                      "Citizens rights and responsibilities",
                      "Electoral process and management",
                      "Political Parties",
                      "Electoral Stakeholders",
                    ]?.map((option, idx) => (
                      <option key={`option-${option}-${idx}`}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-success btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
);

export default Participate;

const ParticipateRadioButtonGroup = ({ id, label, options }) => (
  <>
    <div className="col-sm-3">
      <label htmlFor={id} className="mt-2 pb-2">
        {label}
      </label>
    </div>
    <div className="col-sm-9 mt-2">
      <div className="form-row">
        {options?.map((option, idx) => (
          <RadioButton {...option} name={id} key={`option-${label}-${idx}`} />
        ))}
      </div>
    </div>
  </>
);
