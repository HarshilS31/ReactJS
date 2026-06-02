const Greeting = () => {
  const name = "Harry Kane";
  const currDate = new Date();

  return (
    <div>
      <h1>Hello {name}, how are you?</h1>
      {/* Converting the date object into a string so JSX can render it */}
      <p>Today is: {currDate.toDateString()}</p>
    </div>
  );
};

export default Greeting;