import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import { AppPaths } from '../../constants';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* auth */}
        <Route path={AppPaths.LOGIN} element={<LoginPage />}/>
        <Route path={AppPaths.REGISTRATION} element={<RegisterPage />}/>
      </Routes>
    </div>
  );
}

export default App;
