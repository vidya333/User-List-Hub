import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './UserList';
import './App.css'
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <UserList/>
    </div>
  );
}

export default App;
