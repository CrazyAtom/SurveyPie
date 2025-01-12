import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constant/color';

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  min-width: 200px;
  padding: 16px 24px;
  border-radius: 4px;
  border: none;

  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};

  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${TERTIARY.BUTTON.DEFAULT.COLOR}`
      : 'none'};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.HOVER.COLOR}`
        : 'none'};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.PRESSED.COLOR}`
        : 'none'};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.DISABLED.COLOR}`
        : 'none'};
  }
`;

export default Button;
