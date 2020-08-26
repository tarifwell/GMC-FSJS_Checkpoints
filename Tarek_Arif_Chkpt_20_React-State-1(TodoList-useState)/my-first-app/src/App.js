import React from 'react';
import TodoList from './components/TodoList'
//import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>TASK's LIST</h1>
      </header>
      <section className="container">
        <TodoList />
      </section>
    </div>
  );
}

export default App;
