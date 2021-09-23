import { useCallback, useState } from 'react';

type increaseFn = (step:number) => void

export const useCounter = (initialCount: number):{count:number,increase:increaseFn} => {
  const [count, setCount] = useState(initialCount);
  const increase = useCallback((step: number) => setCount((x: number) => x + step), [setCount]);

  return { count, increase };
};
