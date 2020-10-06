import React, { useState } from "react";
import AddButton from "./Components/AddButton";
import MovieCard from "./Components/MovieCard";
import SearchBar from "./Components/SearchBar";
import { movies } from './shared/constants'
import "./App.css";
import "./Styles.css";

function App() {
  const [films, setFilms] = useState(movies);
  const [filter, setFilter] = useState({title: "", rate: 0});
  
  const Addfilm = (film) => {
    setFilms([...films, film]);
  };

  const setSearch = (item) => {
    setFilter(item);
  };

  const data = () => {
    if (filter.title !== "" || filter.rate !== 0) {
      let results = [];
      if (filter.title !== "" && filter.rate !== 0) {
        results = films.filter((item) =>
          item.title.toLowerCase().includes(filter.title.toLowerCase())
        );
        results = results.filter((item) => Number(item.rate) === Number(filter.rate));
      }
      if (filter.title !== "" && filter.rate === 0) {
        results = films.filter((item) =>
          item.title.toLowerCase().includes(filter.title.toLowerCase())
        );
      }
      if (filter.title === "" && filter.rate !== 0) {
        results = films.filter((item) => Number(item.rate) ===  Number(filter.rate));
      }
      return results;
    }
    return films;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <SearchBar  setSearch = {setSearch} />
      </header>

      <div className="row">
        {data().map((item, index) => {
          return <MovieCard item={item} key={index} />;
        })}
      </div>
      <AddButton Addfilm = {Addfilm} />
    </div>
  );
}

export default App;
