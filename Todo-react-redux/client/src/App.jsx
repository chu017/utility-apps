import React from 'react';
import Todo from './Todo';

const App = () => (
  <>
    <h3>To do list</h3>
    <div id="form">
      <input type="input" />
      <button type="button">add</button>
    </div>
    <hr />
    <Todo />
  </>
);

export default App;
