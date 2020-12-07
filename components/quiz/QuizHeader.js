import React from "react";

const QuizHeader = ({
  QnNo,
  TotalQuestion,
  Title,
  SubTitle,
  Detail,
  changeLanguage,
  config,
}) => (
  <div
    className="container p-0"
    style={{
      maxWidth: 800,
    }}
  >
    <div className="quiz__container">
      <h1>Question</h1>
      <small>
        {QnNo} / {TotalQuestion}
      </small>
      <p className="quiz__question">
        {Title}({SubTitle})
      </p>

      <div className="quiz_choices_container">
        <div className="quiz__choices">Choices</div>
        <div className="quiz__languages">
          <span
            className={config?.ln === "EN" ? "not selected" : "selected"}
            onClick={(_) => changeLanguage("EN")}
          >
            English
          </span>
          <span
            className={config?.ln === "NP" ? "not selected" : "selected"}
            onClick={(_) => changeLanguage("NP")}
          >
            Nepali
          </span>
          <span className="hints"> ? </span>
        </div>
      </div>
    </div>
  </div>
);
export default QuizHeader;
