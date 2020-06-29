import React from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';
import Users from './components/users/Users';

function App() {
  
  return (

    <div className="App">
      {/* { loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello {showName ? name : null }</h1>
        )
      } */}

      <Navbar title="Github Finder" icon="fab fa-github"/>

      <div className="container">
        <Users/>
      </div>

    </div>

  );
}

export default App;
