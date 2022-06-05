import searchIcon from '../../imgs/search.png';
import './Search.css';
import {useState} from 'react';


function Search({onSearch}){
  const [input, setInput] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault();
    onSearch(input)
  }
  return (
    <form className="search-comp" onSubmit={submitHandler} >
      <img src={searchIcon} />
      <input
       type="search"
        placeholder="Search for a country..."
        value={input}
        onChange={(e) => setInput(e.target.value)}

      />
    </form>
  )
}

export default Search;