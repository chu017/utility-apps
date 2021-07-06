import React, { useState, useEffect } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState(['Todo']);

  useEffect(() => {

  });

  const editTodo = () => {
    setTodo(['New Todo']);
  };

  const deleteTodo = () => {
    setTodo([]);
  };

  if (todo.length !== 0) {
    return (
      <>
        <li className="todo">
          <span>{todo[0]}</span>
          <button type="button" onClick={editTodo}>edit</button>
          <button type="button" onClick={deleteTodo}>delete</button>
        </li>
      </>
    );
  }
  return null;
};

export default Todo;
