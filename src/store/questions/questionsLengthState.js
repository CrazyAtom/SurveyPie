import { selector } from 'recoil';

import questionsState from './atom';

const questionsLengthState = selector({
  key: 'questionsLengthState',
  get: ({ get }) => get(questionsState).length,
});

export default questionsLengthState;
