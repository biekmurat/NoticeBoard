
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NoticeForm from './NoticeForm';

test('renders notice form', () => {
  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <NoticeForm />
    </Provider>
  );

  const input = getByPlaceholderText('Enter notice title');
  expect(input).toBeInTheDocument();
});

test('adds notice on form submit', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <NoticeForm />
    </Provider>
  );

  const input = getByPlaceholderText('Enter notice title');
  const addButton = getByText('Add Notice');

  fireEvent.change(input, { target: { value: 'Test Notice' } });
  fireEvent.click(addButton);

  expect(input.value).toBe('');
});
