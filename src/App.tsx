import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Header from './components/templates/Header';
import { fetchCategories } from './app/action-creator/categories/fetchCategories';

function App() {

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route element={<Main />} path="/">
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
