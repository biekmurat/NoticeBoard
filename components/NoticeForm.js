
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotice } from '../redux/actions/noticeActions';

const NoticeForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNotice(title));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter notice title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Notice</button>
    </form>
  );
};

export default NoticeForm;
