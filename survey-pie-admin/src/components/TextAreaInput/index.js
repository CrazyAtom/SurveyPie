import TextArea from 'antd/es/input/TextArea';

function TextAreaInput({ options }) {
  return <TextArea placeholder={options.placeholder} maxLength={options.max} />;
}

export default TextAreaInput;
