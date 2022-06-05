import {useState} from 'react';

import "./AllCountries.css";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";


function Main(props) {
  const [country, setCountry] = useState("") 
  
  const getCountries = async () => {
    const res = await fetch("");
    const data = await res.json()

    setCountry(data)

    // console.log(country.name.common)
  }
  

  return (
    <div className={props.darkMode ? "mainDark" : "light"}>
      <Search />
      <Filter />
      Mains
    </div>
  );
}

export default Main;
