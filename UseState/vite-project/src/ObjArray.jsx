import { useState } from "react";

const ObjArray = () => {
  const [movie, setMovie] = useState([
    { id: 1, title: "The Dark Knight", Rating: 8.5 },
    { id: 2, title: "Iron Man", Rating: 8 },
    { id: 3, title: "Justice League", Rating: 8.2 },
  ]);

  function handleClick() {
    setMovie(
      movie.map((m) => 
        m.id === 1 ? { ...m, title: "Bat Man" } : m
      )
    );
  }

  return (
    <>
      {movie.map((m) => (
        <ul key={m.id}>
          <li>{m.title}</li>
        </ul>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </>
  );
};

export default ObjArray;