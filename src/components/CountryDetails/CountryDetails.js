import { Link, useParams } from "react-router-dom";
import arrowBlack from "../../imgs/arrowBlack.png";
import arrowWhite from "../../imgs/arrowWhite.png";
import "./CountryDetails.css";
import { useEffect, useState } from "react";
import { apiUrl } from "../util/api";

function CountryDetails(props) {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState("");

  const { name } = useParams();
  // const borders = country.map((country, key) => country.borders);
  // const languages = country.map((country) => country.languages);

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiUrl}/name/${name}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getCountryByName();
  }, [name]);

  return (
    <div className={props.darkMode ? "country-detail-div country-detail-dark" : "country-detail-div"}>
      <Link className="link" to="/">
        <button className={props.darkMode ? "back--btn country-detail-dark" : "back--btn"}  >
          <img className="arrow-left" src={props.darkMode ? arrowWhite : arrowBlack} alt="left arrow" />
          <span>Back</span>
        </button>
      </Link>
      <div>
        {error && { error }}
        {country?.map((country, index) => (
          <div className="country" key={index}>
            <img src={country.flags.png} />
            <div>
              <h3>{country.name.common}</h3>
              <div className="name-level-flex">
                <div className="name">
                  <p>
                    Native Name:
                    <span>{country.name.official}</span>
                  </p>
                  <p>
                    Population:
                    <span>{new Intl.NumberFormat().format(country.population)}</span>
                  </p>
                  <p>
                    Region:
                    <span>{country.region}</span>
                  </p>
                  <p>
                    Sub Region:
                    <span>{country.subregion}</span>
                  </p>
                  <p>
                    Capital:
                    <span>{country.capital}</span>
                  </p>
                </div>
                <div className="top-domain">
                  <p className="domain">
                    Top Level Domain:
                    <span>{country.tld}</span>
                  </p>
                  <p>
                    Currencies:
                    <span>{}</span>
                  </p>
                  <p>
                    Languages:
                    <span></span>
                  </p>
                </div>
              </div>
              <p className="borders">
                Border Countries: 
                <span>{country.borders}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryDetails;
