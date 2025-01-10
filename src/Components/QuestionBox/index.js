import styled from 'styled-components';

import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

function QuestionBox({ question, questionsLength, step, answer, setAnswer }) {
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        options={question.options}
        answer={answer}
        setAnswer={setAnswer}
      ></Body>
      <ActionButtons
        questionsLength={questionsLength}
        step={step}
      ></ActionButtons>
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
