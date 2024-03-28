import { useState } from "react";
import "./App.css";

const Instrument = () => {
  const [instrument, setInstrument] = useState("");

  const instrumentChangeHandler = (event) => {
    setInstrument(event.target.value);
  };

  return (
    <div>
      <label htmlFor="instruments">Select a musical instrument:</label>
      <select id="instruments" onChange={instrumentChangeHandler}>
        <option value="Guitar">Guitar</option>
        <option value="Piano">Piano</option>
        <option value="Drums">Drums</option>
      </select>
      <p>Type: {instrument}</p>
    </div>
  );
};

const Languages = () => {
  const [language, setLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="languages">Select a language:</label>
      <select id="languages" onChange={handleLanguageChange}>
        <option value="England">English</option>
        <option value="France">French</option>
        <option value="Spain">Spanish</option>
      </select>
      {/* <p>{language && `Origin: ${language}`}</p> */}
      {language && <p>Origin: {language}</p>}
    </div>
  );
};

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState("");

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };

  return (
    <div>
      <label htmlFor="cars">Select a car brand: </label>
      <select id="cars" onChange={handleCarChange}>
        <option value="Audi- German luxury automobile manufacturer">
          Audi
        </option>
        <option value="BMW- Bayerische Motoren Werke AG, a German multinational company">
          Audi
        </option>
        <option value="Tesla - American electric vehicle pioneer and sustainable energy company.">
          Tesla
        </option>
      </select>
      <p>Details: {selectedCar}</p>
    </div>
  );
};

const Continent = () => {
  const [continent, setContinent] = useState("");

  const handleContinentChange = (event) => {
    setContinent(event.target.value);
  };

  return (
    <div>
      <label htmlFor="continent">Select a continent: </label>
      <select id="continent" onChange={handleContinentChange}>
        <option value="Asia - The largest continent by land area and population.">
          Asia
        </option>
        <option value="Europe - Culturally rich continent with diverse history.">
          Europe
        </option>
        <option value="Africa - Continent of diverse landscapes, cultures, and wildlife.">
          Africa
        </option>
      </select>
      <p>Details: {continent}</p>
    </div>
  );
};

const Movie = () => {
  const [movie, setMovie] = useState("");

  const movieChangeHandler = (event) => {
    setMovie(event.target.value);
  };

  return (
    <div>
      <label htmlFor="movie" or>
        Select a movie genrne:{" "}
      </label>
      <select id="movie" onChange={movieChangeHandler}>
        <option value="Films with exciting and fast-paced sequences.">
          Action
        </option>
        <option value="Comedy - Films are intended to make the audience laugh.">
          Comedy
        </option>
        <option value="Drama - Films with serious themes and emotions.">
          Drama
        </option>
      </select>
      <p>Description: {movie} </p>
    </div>
  );
};
export default function App() {
  return (
    <main>
      <Instrument />
      <br />
      <Languages />
      <br />
      <Cars />
      <br />
      <Continent />
      <br />
      <Movie />
    </main>
  );
}
