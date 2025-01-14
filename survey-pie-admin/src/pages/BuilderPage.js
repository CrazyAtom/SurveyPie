import { Col, Input, Row } from 'antd';
import { produce } from 'immer';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayout';
import { setTitle } from '../stores/survey/surveySlice';

function BuilderPage() {
  const survey = useSelector((state) => state.survey);
  const [data, setData] = useState();
  const dispatch = useDispatch();

  return (
    <MainLayout selectedKeys={['builder']}>
      <Row>
        <Col flex="auto">
          <Input
            placeholder="제목을 입력해주세요"
            value={survey.title}
            onChange={(e) => {
              dispatch(setTitle(e.target.value));
            }}
          />
          <PreviewSection
            questions={data.questions}
            addQuestion={() => {
              setData(
                produce((draft) => {
                  draft.questions.push({
                    title: 'Untitled',
                    desc: '',
                    type: 'text',
                    required: false,
                    options: {
                      max: 20,
                      placeholder: '',
                    },
                  });
                }),
              );
            }}
            moveUpQuestion={(index) => {
              if (index === 0) {
                return;
              }
              setData(
                produce((draft) => {
                  const temp = draft.questions[index];
                  draft.questions[index] = draft.questions[index - 1];
                  draft.questions[index - 1] = temp;
                }),
              );
            }}
            moveDownQuestion={(index) => {
              if (index === data.questions.length - 1) {
                return;
              }
              setData(
                produce((draft) => {
                  const temp = draft.questions[index];
                  draft.questions[index] = draft.questions[index + 1];
                  draft.questions[index + 1] = temp;
                }),
              );
            }}
            deleteQuestion={(index) => {
              if (data.questions.length === 1) {
                return;
              }
              setData(
                produce((draft) => {
                  draft.questions.splice(index, 1);
                }),
              );
            }}
          />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default BuilderPage;
