import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

function AddButton({ addQuestion }) {
  const [visible, setVisible] = useState();
  const hide = () => {
    setVisible(false);
  };
  const handleVisibleChange = (newOpen) => {
    setVisible(newOpen);
  };

  return (
    <AddButtonWrapper>
      <Popover
        content={
          <div>
            <QuestionButtonWrapper>
              <Button
                type="text"
                onClick={() => {
                  hide();
                  addQuestion('select');
                }}
              >
                객관식
              </Button>
            </QuestionButtonWrapper>
            <QuestionButtonWrapper>
              <Button
                type="text"
                onClick={() => {
                  hide();
                  addQuestion('text');
                }}
              >
                단답식
              </Button>
            </QuestionButtonWrapper>
            <QuestionButtonWrapper>
              <Button
                type="text"
                onClick={() => {
                  hide();
                  addQuestion('textarea');
                }}
              >
                서술식
              </Button>
            </QuestionButtonWrapper>
          </div>
        }
        placement="right"
        trigger="click"
        open={visible}
        onOpenChange={handleVisibleChange}
      >
        <IconButton>
          <PlusCircleOutlined />
        </IconButton>
      </Popover>
    </AddButtonWrapper>
  );
}

const AddButtonWrapper = styled.div`
  text-align: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 2.5rem;
  cursor: pointer;
`;

const QuestionButtonWrapper = styled.div`
  display: block;
`;

export default AddButton;
