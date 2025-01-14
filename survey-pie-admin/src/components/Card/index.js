import { DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

function Card({
  title,
  desc,
  children,
  onUpButtonClick,
  onDownButtonClick,
  onDeleteButtonClick,
}) {
  return (
    <CardWrapper>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <Body>{children}</Body>

      <ButtonGroupWrapper>
        <ButtonGroup>
          <Button type="text" icon={<UpOutlined />} onClick={onUpButtonClick} />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={onDeleteButtonClick}
          />
          <Button
            type="text"
            icon={<DownOutlined />}
            onClick={onDownButtonClick}
          />
        </ButtonGroup>
      </ButtonGroupWrapper>
    </CardWrapper>
  );
}

const ButtonGroupWrapper = styled.div`
  position: absolute;
  left: calc(100%);
  top: 0;
  display: none;
`;

const ButtonGroup = styled.div`
  background: #ffffff;
  margin-left: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
`;

const CardWrapper = styled.div`
  border: 1px solid #dddddd;
  width: 400px;
  margin: 30px auto;
  background: #ffffff;
  position: relative;

  &:hover ${ButtonGroupWrapper} {
    display: block;
  }
`;

const Head = styled.div`
  border-bottom: 1px solid #dddddd;
  padding: 15px;
`;

const Title = styled.div`
  font-weight: 600;
`;

const Desc = styled.div`
  color: #666666;
  // font-size: 1rem;
  margin-left: 15px;
`;

const Body = styled.div`
  // font-size: 1rem;
  padding: 15px;
`;

export default Card;
