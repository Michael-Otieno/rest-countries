import './Navbar.css';

import moon from '../../imgs/moon-regular.svg';


function Navbar(){
  return (
    <>
      <nav className="navbar">
        <h1>Where in the world?</h1>
        <div className="toggle">
          <img src={moon} />
          <h2>Dark Mode</h2>
        </div>
      </nav>
    </>
  )
}

export default Navbar;