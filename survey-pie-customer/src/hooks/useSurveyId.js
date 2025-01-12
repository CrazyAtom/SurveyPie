import { useParams } from 'react-router-dom';

function useSurveyId() {
  const params = useParams();
  return parseInt(params.surveyId, 0);
}

export default useSurveyId;
