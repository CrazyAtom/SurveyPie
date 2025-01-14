import Body from '../Body';
import Card from '../Card';

function PreviewSection({ questions }) {
  return (
    <div>
      {questions.map((question, index) => (
        <Card key={index} title={question.title} desc={question.desc}>
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
    </div>
  );
}

export default PreviewSection;
