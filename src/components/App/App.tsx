import React from 'react';
import { Route, Routes } from 'react-router';
import LoginPage from '../../pages/LoginPage/LoginPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
