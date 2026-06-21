import { useState } from "react";

interface FormDetails {
  name: string;
  email: string;
  password: string;
}

const ActionsRev = () => {
  const [data, setData] = useState<FormDetails | null >(null);

  const handleForm = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
 
    setData({ name, email, password });
  };

  return (
    <div>
      <form action={handleForm}>
        <input placeholder="Enter name" type="text" name="name"  required/>
        <input placeholder="Enter email" type="email" name="email" required />
        <input placeholder="Enter password" type="password" name="password" required />
        <button type="submit">Submit</button>
      </form>
      {data && (
        <div style={{ marginTop: "20px" }}>
          <h3>User Details:</h3>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Password:</strong> {data.password}</p>
        </div>
      )}
    </div>
  );
};

export default ActionsRev;
