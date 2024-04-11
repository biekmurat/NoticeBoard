
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NoticeItem from './NoticeItem';

test('renders notice item', () => {
  const notice = { id: '1', title: 'Test Notice' };
  const { getByText } = render(
    <Provider store={store}>
      <NoticeItem notice={notice} />
    </Provider>
  );

  const title = getByText('Test Notice');
  expect(title).toBeInTheDocument();
});

test('calls delete function when delete button is clicked', () => {
  const notice = { id: '1', title: 'Test Notice' };
  const { getByText } = render(
    <Provider store={store}>
      <NoticeItem notice={notice} />
    </Provider>
  );

  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  expect(store.getState().notices.length).toBe(0);
});
