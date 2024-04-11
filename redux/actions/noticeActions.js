import { v4 as uuidv4 } from 'uuid';

export const addNotice = (title) => ({
  type: 'ADD_NOTICE',
  payload: {
    id: uuidv4(),
    title
  }
});

export const deleteNotice = (id) => ({
  type: 'DELETE_NOTICE',
  payload: id
});
