import React from "react";
import StarRatings from "react-star-ratings";
import { Card } from "react-bootstrap";

const MovieCard = ({ item }) => {
  return (
    <div className="col-sm">
      <Card className="card" style={{ width: "12rem" }}>
        <Card.Img variant="top" src={item.image} alt={item.title} />
        <Card.Body>
          <Card.Title>
            {item.title}
          </Card.Title>
          <Card.Text>
            {item.date}
          </Card.Text>
          <StarRatings
            rating={Number(item.rate)}
            starRatedColor="gold"
            numberOfStars={5}
            starSpacing= '3px'
            name="rating"
            starDimension="20px"
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
