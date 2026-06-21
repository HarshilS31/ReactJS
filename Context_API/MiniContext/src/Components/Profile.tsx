import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user || !user.name) {
        return (
            <div style={{ marginTop: '20px', color: '#666' }}>
                <p>No profile data found. Please log in above.</p>
            </div>
        );
    }

  return (
    <div>
        <h2>USER DETAILS</h2>
        <div><strong>Name:</strong> {user.name}</div>
        <div><strong>Email:</strong> {user.email}</div>
        <div><strong>Password:</strong> {user.password}</div>
    </div>
  )
}

export default Profile;