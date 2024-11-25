import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
  email: string;
}

const HomeScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Type assertion for location state
  const { state } = location as { state: LocationState };
  
  // Redirect to login page if state is undefined
  if (!state) {
    navigate('/login');
    return null;
  }

  const email = state?.email || 'Guest';  // Optional chaining with fallback

  const fetchUserData = (email: string) => {
    const user = sessionStorage.getItem(email);
    try {
      return user ? JSON.parse(user) : null; // Parse JSON data if found
    } catch (error) {
      console.error('Failed to parse user data:', error);
      return null;
    }
  };

  const userData = fetchUserData(email) || {
    name: 'Guest user',
    email,
    phone: 'N/A',
    address: 'N/A',
    dob: 'N/A',
    gender: 'N/A',
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    navigate('/login');  // Use navigate to redirect to login page
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Welcome {userData.name}</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">User Information</h5>
          <p className="card-text"><strong>Email:</strong> {userData.email}</p>
          <p className="card-text"><strong>Phone:</strong> {userData.phone}</p>
          <p className="card-text"><strong>Address:</strong> {userData.address}</p>
          <p className="card-text"><strong>Date of Birth:</strong> {userData.dob}</p>
          <p className="card-text"><strong>Gender:</strong> {userData.gender}</p>
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;



