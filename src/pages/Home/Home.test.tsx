import Home from './Home';
import { render, getByTestId, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { wrapComponentIntoRedux } from '../../../test/helper';

describe('home', () => {
  it('should render ', () => {
    const { container } = render(wrapComponentIntoRedux(Home));
    const counter = getByTestId(container, 'counter');
    expect(counter).toHaveTextContent('0');
    const addBtn = getByTestId(container, 'add-btn');
    fireEvent.click(addBtn);
    expect(counter).toHaveTextContent('1');
  });
});
