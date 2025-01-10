import styled from 'styled-components';

function TextAreaInput({ answer, setAnswer, options }) {
  return (
    <TextArea
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    />
  );
}

const TextArea = styled.textarea`
  height: 196px;
  resize: none;

  border: 1px solid #E0E0E0
  box-sizing: border-box;
  border-radius: 5px;

  font-size: 18px;
  line-height: 21px;

  padding: 12px 18px;
`;

export default TextAreaInput;
