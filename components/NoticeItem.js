import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNotice } from '../redux/actions/noticeActions';

const NoticeItem = ({ notice }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNotice(notice.id));
  };

  return (
    <li>
      {notice.title} <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default NoticeItem;
