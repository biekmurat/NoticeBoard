import React from 'react';
import { Provider } from 'react-redux';
import NoticeBoard from './components/NoticeBoard';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NoticeBoard />
      </div>
    </Provider>
  );
}

export default App;
