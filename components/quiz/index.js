import React, { useState } from "react";

import QuizHeader from "./QuizHeader";
import QuizAnswers from "./QuizAnswers";

const Quiz = () => {
  const [quizQuestionDetail, setQuizQuestionDetail] = useState(
    quizQuestionResponse
  );
  const [quizConfig, setQuizConfig] = useState({ ln: "EN" });
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

  const handleNextClick = (_) => {
    if (currentQuestionIdx + 1 < quizQuestionDetail?.questions?.length)
      setCurrentQuestionIdx(currentQuestionIdx + 1);
  };

  const handleLanguageChange = (ln = "EN") => {
    setQuizConfig({ ...quizConfig, ln });
  };

  const qn = quizQuestionDetail?.questions[currentQuestionIdx][quizConfig?.ln];
  const note = quizQuestionDetail?.note[0][quizConfig?.ln];
  return (
    <main>
      <QuizHeader
        config={quizConfig}
        {...qn}
        QnNo={currentQuestionIdx + 1}
        TotalQuestion={quizQuestionDetail?.questions?.length}
        changeLanguage={handleLanguageChange}
      />
      <QuizAnswers
        onNextClick={handleNextClick}
        options={qn?.Answer}
        note={note}
        isNoteVisible={
          currentQuestionIdx + 4 === quizQuestionDetail?.other?.ShowNotesAfter
        }
      />
    </main>
  );
};

export default Quiz;

const quizQuestionResponse = {
  questions: [
    {
      ID: "5fc74527818d092710787ad1",
      EN: {
        Title: "In which district Election was done at first?",
        SubTitle: "In 2032",
        Detail: "Questions related to geography.",
        Answer: [
          {
            Option: "Palpa",
            Image: null,
          },
          {
            Option: "Butwal",
            Image: null,
          },
          {
            Option: "Kathmandu",
            Image: null,
          },
          {
            Option: "Chitwan",
            Image: null,
          },
        ],
      },
      NP: {
        Title: "सुरुमा कुन जिल्लामा चुनाव भयो?",
        SubTitle: "२०३२ साल मा ",
        Detail: "भूगोलसँग सम्बन्धित प्रश्नहरू।",
        Answer: [
          {
            Option: "पाल्पा ",
            Image: null,
          },
          {
            Option: "बुटवल",
            Image: null,
          },
          {
            Option: "काठमाडौं ",
            Image: null,
          },
          {
            Option: "चितवन ",
            Image: null,
          },
        ],
      },
      Point: 20,
    },
    {
      ID: "5fc746d2818d092710787ad8",
      EN: {
        Title: "What is the area of Nepal?",
        SubTitle: "Square Kilometer",
        Detail: "Area of Nepal in Square Kilometer",
        Answer: [
          {
            Option: "147,516 km²",
            Image: null,
          },
          {
            Option: "147,513 km²",
            Image: null,
          },
          {
            Option: "147,123 km²",
            Image: null,
          },
          {
            Option: "147,111 km²",
            Image: null,
          },
        ],
      },
      NP: {
        Title: "नेपालको क्षेत्र कत्रो छ?",
        SubTitle: "बर्ग किलोमिटर ",
        Detail: "क्वायर किलोमीटरमा नेपालको क्षेत्र",
        Answer: [
          {
            Option: "147,516 ",
            Image: null,
          },
          {
            Option: "१४७,५१३",
            Image: null,
          },
          {
            Option: "१४७,१२३",
            Image: null,
          },
          {
            Option: "१४२,१११ ",
            Image: null,
          },
        ],
      },
      Point: 20,
    },
  ],
  note: [
    {
      ID: "5fc5e289b0459c3988b65d62",
      EN: {
        Title: "Notes about geography",
        Detail: "Some facts about geography from Nepal.",
      },
      NP: {
        Title: "भूगोलको बारेमा टिप्पणीहरू",
        Detail: "नेपालको भूगोलको बारेमा केहि तथ्यहरु",
      },
    },
  ],
  other: {
    ShowNotesAfter: 5,
  },
};
