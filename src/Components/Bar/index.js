import styled from 'styled-components';

const Bar = styled.div`
  width: 120px;
  height: 8px;
  border-radius: 16px;
  background: ${({ status }) =>
    status === 'pending'
      ? '#BAA9FF'
      : status === 'in-progress'
      ? '#6542F1'
      : '#E3E2E7'};
`;

export default Bar;
