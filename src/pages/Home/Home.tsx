import React from 'react';
import { useSelector } from 'react-redux';
import style from './Home.less';
import useCommit from '../../hooks/useCommit';
import { IState } from '../../reducer/store';

const Home: React.FC = () => {
  const commit = useCommit();
  const counter = useSelector((state: IState) => state.home.counter);
  return (
    <div>
      <div className={style.header}>head</div>
      <div className={style.sidebar}>side</div>
      <span data-testid="counter">{counter}</span>
      <button onClick={() => commit('add', 1)} data-testid="add-btn">
        add
      </button>
      <button onClick={() => commit('sub', 1)}>sub</button>
    </div>
  );
};

export default Home;
