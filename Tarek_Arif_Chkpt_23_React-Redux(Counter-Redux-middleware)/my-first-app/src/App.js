import React from "react";
import Counter from "./Components/Counter";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./Reducers/reducer";
import "./App.css";
import "./Styles.css";


const myLogger = (store) => (next) => (action) => {
  console.log("Logged action", action);
  next(action);
};

const store = createStore(reducer, applyMiddleware(myLogger));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
