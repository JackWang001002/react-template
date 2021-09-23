/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useDispatch } from 'react-redux';

const useCommit = () => {
  const dispatch = useDispatch();
  return (type: string, payload: unknown) => {
    dispatch({ type, payload });
  };
};

export default useCommit;
