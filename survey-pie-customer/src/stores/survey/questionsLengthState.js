import { selector } from 'recoil';

import surveyState from './surveyState';

const questionsLengthState = selector({
  key: 'questionsLengthState',
  get: ({ get }) => get(surveyState).questions.length,
});

export default questionsLengthState;
