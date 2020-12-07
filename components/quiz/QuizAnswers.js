import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import APIServices from "api/APIServices";

const QuizAnswers = ({ onNextClick, options, note, isNoteVisible = false }) => {
  const [isCorrect, setIsCorrect] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = (_) => {
    if (!!selectedAnswer?.Option) {
      if (verifyAnswer(selectedAnswer?.Option)) setIsCorrect(true);
      else setIsCorrect(false);
      setIsModalVisible(true);
    } else {
    }
    console.log(selectedAnswer?.Option);
  };

  const handleNextClick = (_) => {
    setTimeout(() => {
      setIsModalVisible(false);
      setSelectedAnswer();
      setIsCorrect();
      onNextClick();
    }, 1000);
  };

  const verifyAnswer = async (ans) => {
    const { data, success } = await new APIServices("").post([{ Option: ans }]);
    return success;
  };
  return (
    <div
      className="answers__background"
      style={{
        background: "#f3f3f3",
      }}
    >
      <div
        className="container p-0"
        style={{
          maxWidth: 800,
        }}
      >
        <div className="quiz__answers_box ">
          {options?.map((ans, idx) => (
            <QuizAnswerCard
              {...ans}
              key={`answer-index-${idx}`}
              extraClass={
                selectedAnswer?.Option === ans?.Option ? "select-default" : ""
              }
              onClick={(_) => setSelectedAnswer(ans)}
            />
          ))}

          <div className="quiz__submit" onClick={handleSubmit}>
            Submit
          </div>
        </div>
      </div>
      <div
        className={`modal fade ${isModalVisible ? "d-block" : ""}`}
        style={{
          opacity: isModalVisible ? 1 : 0,
          backgroundColor: "#0000087a",
        }}
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className={`modal-title correct ${
                  isCorrect ? "" : "text-danger"
                }`}
                id="myModalLabel"
              >
                {`Your Answer Is ${isCorrect ? "Correct" : "Incorrect"}`}
              </h5>
              {/* <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={(_) => setIsModalVisible(false)}
              >
                <FontAwesomeIcon icon={faTimes} fill="#000" height="15" />
              </button> */}
            </div>
            <div className={`modal-body ${isNoteVisible ? "" : "d-none"}`}>
              <h4>{note?.Title}</h4>
              {note?.Detail}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNextClick}
              >
                Next <FontAwesomeIcon icon={faArrowRight} height="15" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizAnswers;

const QuizAnswerCard = ({ Option = "", extraClass = "", icon, onClick }) => (
  <div className="quiz__answer" onClick={onClick}>
    <div className="row">
      <div className="col-12">
        <div className={`quiz__answer_single ${extraClass}`}>
          {Option}
          {icon}
        </div>
      </div>
    </div>
  </div>
);
