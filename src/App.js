import {useState} from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllCountries from './components/AllCountries/AllCountries';
import CountryDetails from './components/CountryDetails/CountryDetails';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode(){
    setDarkMode(prevMode => ! prevMode)
  }

  return (
    <div className="App">
      <Navbar />
      <AllCountries />
      <CountryDetails />
    </div>
  );
}

export default App;
