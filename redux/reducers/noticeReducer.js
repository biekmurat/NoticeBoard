
const initialState = {
    notices: []
  };
  
  const noticeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTICE':
        return {
          ...state,
          notices: [...state.notices, action.payload]
        };
      case 'DELETE_NOTICE':
        return {
          ...state,
          notices: state.notices.filter((notice) => notice.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default noticeReducer;
  