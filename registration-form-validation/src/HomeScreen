import React from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = ({ userData }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome, {userData.firstName} {userData.lastName}</h1>
      <p>Email: {userData.email}</p>
      <p>Graduation Year: {userData.graduationYear}</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default HomeScreen;

