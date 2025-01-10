import { useState } from 'react';

import ProgressIndicator from './Components/ProgressIndicator';
import QuestionBox from './Components/QuestionBox';

function App() {
  const questions = [
    {
      title: '질문1 입니다',
      desc: '설명1 입니다',
      type: 'text',
      required: false,
      option: {},
    },
    {
      title: '질문12입니다',
      desc: '설명2 입니다',
      type: 'text',
      required: false,
      option: {},
    },
  ];

  const step = 0;

  const { answers, setAnswers } = useState({});

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default App;
