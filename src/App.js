import {useState} from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode(){
    setDarkMode(prevMode => ! prevMode)
  }

  return (
    <div className="App">
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
