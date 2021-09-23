import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useCommit from '../../hooks/useCommit';
import { useFetch } from '../../hooks/useFetch';
import { IState } from '../../reducer/store';

const ListPage: React.FC = () => {
  const items = useSelector((state: IState) => state.list.items);
  const commit = useCommit();
  const { get, error, data } = useFetch();
  const refresh = useCallback(async () => {
    await get('https://randomuser.me/api/');
    commit('xx2', data); // if want to write to redux
  }, [commit, data, get]);

  return (
    <div data-testid="hello">
      this is list page
      {items.map((e: string, idx: number) => (
        <li key={idx}>{e}</li>
      ))}
      <button onClick={refresh}>refresh</button>
      {error && JSON.stringify(error)}
      {data && JSON.stringify(data)}
    </div>
  );
};

export default ListPage;
