import { useParams } from 'react-router-dom';

function useStep() {
  const params = useParams();
  return parseInt(params.step, 0);
}

export default useStep;
