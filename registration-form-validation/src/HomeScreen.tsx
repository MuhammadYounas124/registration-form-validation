import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
  email?: string;
}

const HomeScreen = () => {
  const location = useLocation<LocationState>();
  const navigate = useNavigate();  // Add the navigate hook here
  const { state } = location;
  const email = state?.email || 'Guest';

  const userData = {
    name: 'John Doe',  // Consider making this dynamic
    email,
    phone: '123-456-7890',
    address: '123 Main Street, Springfield',
    dob: '01-01-1990',
    gender: 'Male',
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    navigate('/login');  // Use navigate to redirect to login page
  };

  return (
    <div>
      <h1>Welcome {userData.name}</h1>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Address: {userData.address}</p>
      <p>Date of Birth: {userData.dob}</p>
      <p>Gender: {userData.gender}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomeScreen;
