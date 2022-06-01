import './Navbar.css';

import darkMoon from '../../imgs/dark-moon.png';
import whiteMoon from '../../imgs/white-moon.png';



function Navbar(props){
  return (
    <>
      <nav className={props.darkMode ? "navbar dark" : "navbar"}>
        <h1>Where in the world?</h1>
        <div className="toggle" onClick={props.toggleDarkMode} >   
         <img src={props.darkMode ? whiteMoon : darkMoon} />
          <h2>Dark Mode</h2>
        </div>
      </nav>
    </>
  )
}

export default Navbar;