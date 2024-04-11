// NoticeList.js
import React from 'react';
import { useSelector } from 'react-redux';
import NoticeItem from './NoticeItem';

const NoticeList = () => {
  const notices = useSelector((state) => state.notices);

  return (
    <div className="notice-container">
      {notices.map((notice) => (
        <div className="notice-box" key={notice.id}>
          <NoticeItem notice={notice} />
        </div>
      ))}
    </div>
  );
};

export default NoticeList;

