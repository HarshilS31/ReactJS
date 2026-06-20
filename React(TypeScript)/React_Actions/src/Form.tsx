import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState<{ name: string; email: string; password: string } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      password: data.get("password") as string,
    };
    setUserData(userData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter Name" name="name" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Enter Email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" name="password" />
        <br />
        <button type="submit">Submit</button>
      </form>

      {userData && (
        <h2>
          {userData.name}, {userData.email}, {userData.password}
        </h2>
      )}
    </>
  );
};

export default Form;
