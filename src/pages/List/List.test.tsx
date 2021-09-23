import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import List from './List';
import { wrapComponentIntoRedux } from '../../../test/helper';

describe('list page', () => {
  beforeAll(() => console.log('beforeAll'));
  beforeEach(() => console.log('beforeEach'));
  afterEach(() => console.log('afterEach'));

  it('should render', function () {
    render(wrapComponentIntoRedux(List));
    const dom = screen.getByTestId('hello');
    dom.addEventListener('click', () => {
      console.log('hello is clicked');
    });
    fireEvent.click(dom);
  });
  it('should waitFor', function () {
    waitFor(
      () => {
        console.log('xxx');
      },
      { timeout: 20 }
    );
  });
});
