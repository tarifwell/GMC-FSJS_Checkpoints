import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserList from "./Components/UserList";
import axios from "axios";
import "./App.css";
import "./Styles.css";

function App() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const [listOfUSer, setlistOfUSer] = useState({ list: [] });

  useEffect(() => {
    async function fetchData() {
      let result = await axios.get(apiUrl);
      // console.log(result);
      // console.log("after result");
      setlistOfUSer({ list: result.data });
    }

    fetchData();
  }, []);

  // useEffect(() => {
  //   function fetchData() {
  //     axios.get(apiUrl).then(function(result){
  //       console.log(result);
  //     });
  //     console.log("after result");
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <header>
        <br/>
        <h1>JSON-placeholder users list</h1>
      </header>
      {listOfUSer.list.length > 0 ? (
        <main className="col-sm">
          {/*listOfUSer.list.length*/}

          {listOfUSer.list.map((user) => (
            <UserList users={user} key={user.id}/>
          ))}
        </main>
      ) : (
        <Spinner animation="border" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      <p>...</p>
    </div>
  );
}

export default App;
