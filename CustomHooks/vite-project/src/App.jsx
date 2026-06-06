import useFetch from "./useFetch";

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data && data.map(l => (
        <ul key={l.id}>
          <li>{l.title}</li>
        </ul>
      ))}
    </>
  );
};

export default App;

//now if we want to perform the same operation in lets say 100 components it will be a mess!
//Thats why we create Custom hook,to store the functionalty in a Hook!