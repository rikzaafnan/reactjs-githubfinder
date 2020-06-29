import React from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';

function App() {
  
  const name ="Muhammad Rikza Afnan"

  const loading = false

  const showName = true;
  

  return (

    <div className="App">
      {/* { loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello {showName ? name : null }</h1>
        )
      } */}

      <Navbar title="Github Finder"/>
    </div>

  );
}

export default App;
