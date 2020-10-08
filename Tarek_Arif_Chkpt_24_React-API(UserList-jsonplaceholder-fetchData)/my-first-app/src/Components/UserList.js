import React from "react";
import { Card } from "react-bootstrap";

const UserList = ({ users }) => {
  return (
      <Card border="warning" className="card" style={{ width: "18rem" }}>

        <Card.Header className="cardHeader">
          <Card.Title>({users.id}) {users.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <span>username: </span>
            {users.username}
          </Card.Subtitle>
        </Card.Header>

        <Card.Body className="bodyTop">
          <Card.Img
            className="img"
            variant="top"
            src={`Images/img${users.id}.png`}
          />

          <ul>
            <li><span>street: </span>{users.address.street}</li>
            <li><span>suite: </span>{users.address.suite}</li>
            <li><span>city: </span>{users.address.city}</li>
            <li><span>zip code: </span>{users.address.zipcode}</li>
          </ul>
        </Card.Body>
        <Card.Body className="bodyTop">
        <ul>
            <li><span className="contactLogo">☏ - </span>{users.phone}</li>
            <li>
              <span className="contactLogo">✉ - </span>
              <Card.Link href={`mailto:${users.email}`}>{users.username}</Card.Link>
            </li>
          </ul>
        </Card.Body>

        <Card.Footer className="text-muted">
          <Card.Subtitle className="mb-2 text-muted companyName">
            <span className="companyTitle">company - </span>
            {users.company.name}
          </Card.Subtitle>
          <Card.Text className="companyCatchPhrase">" {users.company.catchPhrase} "</Card.Text>
        </Card.Footer>
      </Card>
  );
};

export default UserList;
