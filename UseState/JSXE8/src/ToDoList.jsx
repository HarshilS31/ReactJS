import { useState } from 'react';

const ToDoList = () => {
  const [List, setList] = useState(["Task 1", "Task 2", "Task 3"]);
  const [Input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Input.trim()) {
      // 1. Correctly spread the old list inside a new array
      setList([...List, Input]); 
      setInput("");
    }
  }

  return (
    <>
      <h1>TO DO LIST</h1>
      <form onSubmit={handleSubmit}>
        {/* Fix: changed placeHolder to placeholder */}
        <input 
          type="text" 
          onChange={handleChange} 
          value={Input} 
          placeholder="Add Task" 
        />
        <button type="submit">Add Task!</button>
      </form>
      <ul>
        {/* Fix: Added explicit return (or you can use implicit parenthesis) */}
        {List.map((l, index) => {
          return (
            <li key={index}>
              {l}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;