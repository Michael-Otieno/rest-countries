import {useState} from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllCountries from './components/AllCountries/AllCountries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import {Routes, Route} from 'react-router-dom';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode(){
    setDarkMode(prevMode => ! prevMode)
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path='/' element={<AllCountries darkMode={darkMode} />} />
        <Route path='/country/:name' element={<CountryDetails darkMode={darkMode} />} />
      </Routes>     
    </div>
  );
}

export default App;
