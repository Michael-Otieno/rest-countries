import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./AllCountries.css";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import { apiUrl } from "../util/api";

function Main() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiUrl}/all`);
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();

      setCountries(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div>
      <Search />
      <Filter />
      <div className="countries">
        {error && <h3>{error}</h3>}
        {countries?.map((country) => (
          <div className="allCountries">
            <Link
              className="allCountries-link"
              key={country.name.common}
              to="/country"
            >
              <img className="flag" src={country.flags.png} alt="flag" />

              <div className="all-countries-detail">
                <h2 className="all-countries-name">{country.name.common}</h2>
                <p className="all-countries-population">
                  Population:
                  <span>
                    {new Intl.NumberFormat().format(country.population)}
                  </span>
                </p>
                <p className="all-countries-region">
                  Region: <span>{country.region}</span>
                </p>
                <p className="all-countries-capital">
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
