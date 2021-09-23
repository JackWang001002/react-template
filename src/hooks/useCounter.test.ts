import { act, addCleanup, renderHook } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

describe('useCount', () => {
  test('should use counter', () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increase(2);
    });

    expect(result.current.count).toBe(2);
  });
  it('should ok when cleanup', () => {
    renderHook((props) => useCounter(props.initialCount), { initialProps: { initialCount: 0 } });
    addCleanup(()=>console.log('cleanup from __addCleanUp__'));


  });
});
