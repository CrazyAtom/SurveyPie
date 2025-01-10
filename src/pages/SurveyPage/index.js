import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  const params = useParams();
  const questions = [
    {
      title: '질문1 입니다',
      desc: '설명1 입니다',
      type: 'text',
      required: false,
      option: {},
    },
    {
      title: '질문2 입니다',
      desc: '설명2 입니다',
      type: 'text',
      required: false,
      option: {},
    },
    {
      title: '질문2 입니다',
      desc: '설명2 입니다',
      type: 'text',
      required: false,
      option: {},
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  console.log({ answers });

  return (
    <div>
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

export default SurveyPage;
