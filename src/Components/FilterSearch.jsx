import React, { useState, useEffect } from "react";
import "../Styles/ApiSearch.css";

export default function ApiSearch() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState(""); // Search by "capital", "name", "numericCode"
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    console.log("Called");
    fetch(
      "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json",
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  // items loaded from API will be in JSON
  const data = Object.values(items); // JSON - Array

  //data would be passed as the parameter
  function search(items) { //i
    debugger;
    return items.filter((item) => {
      if (item.region == filterParam) { // Asia
        return searchParam.some((newItem) => { // in or ind or pak or i
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return (
      <p>
        {error.message}, if you get this error, the free API I used might have
        stopped working, but I created a simple example that demonstrate how
        this works,{" "}
        <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
          {" "}
          check it out{" "}
        </a>{" "}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper mt-5 p-5">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={q} //India
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">Search countries here</span>
          </label>

          <div className="select mt-5 p-5">
            <select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
              className="custom-select"
              aria-label="Filter Countries By Region"
            >
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <ul className="card-grid">
          {search(data).map((item) => (
            <li>
              <article className="card" key={item.alpha3Code}>
                <div className="card-image">
                  <img
                    className="imgSize"
                    src={item.flag.large}
                    alt={item.name}
                  />
                </div>
                <div className="card-content">
                  <h4 className="card-name">{item.name}</h4>
                  <ol className="card-list mt-5 p-5">
                    <li>
                      population: <span>{item.population}</span>
                    </li>
                    <li>
                      Region: <span>{item.region}</span>
                    </li>
                    <li>
                      Capital: <span>{item.capital}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
