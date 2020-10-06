import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const SearchBar = ({ setSearch }) => {
  const [rate, setRate] = useState(0);
  const [title, setTitle] = useState("");
  
  const changeRating = (newRating) => {
    setRate(newRating);
    setSearch({ title, rate: newRating })
  };

  const changeTitle = (title) => {
    setTitle(title);
    setSearch({ title, rate });
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Cherchez</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Saisir le nom d'un film"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => changeTitle(e.target.value.trim())}
        />
      </InputGroup>
      <StarRatings
        rating={rate}
        starRatedColor="gold"
        starHoverColor="orange"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
        starDimension="30px"
      />
    </div>
  );
};

export default SearchBar;
