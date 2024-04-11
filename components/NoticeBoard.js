
import React from 'react';
import NoticeForm from './NoticeForm';
import NoticeList from './NoticeList';

const NoticeBoard = () => {
  return (
    <div>
      <h1>Notice Board</h1>
      <NoticeForm />
      <NoticeList />
    </div>
  );
};

export default NoticeBoard;
