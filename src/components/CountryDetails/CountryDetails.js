import {Link} from 'react-router-dom';
import arrow from '../../imgs/arrow.png';
import './CountryDetails.css'


function CountryDetails(){
  return (
    <div>
      <Link className='link' to='/'>
        <button className='back--btn'>
          <img className='arrow-left' src={arrow} alt="left arrow" />
          <span>Back</span>
        </button>
      </Link>
      <div>
        Details
      </div>
    </div>
  )
}

export default CountryDetails;