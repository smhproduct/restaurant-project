import React from 'react';
import './App.css';
import MainComponent from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>{/* store name ta builtin */}
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
