import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,   // ✅ Corrected: use [name] as a dynamic key
    }));
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"   // ✅ Added name attribute
            placeholder="Enter your name"   // ✅ fixed casing
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"   // ✅ Added name attribute
            placeholder="Enter Age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <h3>PROFILE INFO:</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
