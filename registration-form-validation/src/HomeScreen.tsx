import { useLocation, useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access email from the location state
  const { email } = location.state || {};

  // Define dummy data for the user (for demonstration purposes)
  const userData = {
    name: 'John Doe', // Replace with actual name if fetched from backend
    email: email || 'N/A',
    phone: '123-456-7890',
    address: '123 Main Street, Springfield',
    dob: '01-01-1990',
    gender: 'Male', // Adjust as needed
  };

  // Define the logout function to navigate back to login
  const logout = () => {
    navigate('/login');
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

