import search from '../../imgs/search.png';
import './Search.css'


function Search(){
  return (
    <div className="search-comp">
      <img src={search} />
      <input type="search" placeholder="Search for a country..."/>
    </div>
  )
}

export default Search;