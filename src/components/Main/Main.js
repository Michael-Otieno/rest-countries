import './Main.css'
import Search from '../Search/Search'

function Main(props){
  return (
    <div className={props.darkMode ? "mainDark" : "light"}>
      <Search />
      Mains
    </div>
  )
}

export default Main;