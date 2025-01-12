import { selector } from 'recoil';

import getSurveys from '../../services/getSurveys';

const surveyState = selector({
  key: 'surveyState',
  get: async () => {
    const res = await getSurveys({
      surveyId: window.location.pathname.split('/')[2],
    });
    return res.data;
  },
});

export default surveyState;
