import mainApi from './apis/mainApi';

async function getSurveys(surveyId) {
  return await mainApi.get(`/surveys/${surveyId}`);
}

export default getSurveys;
