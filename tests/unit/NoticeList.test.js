// NoticeList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NoticeList from './NoticeList';

test('renders notice list', () => {
  const { getByText } = render(
    <Provider store={store}>
      <NoticeList />
    </Provider>