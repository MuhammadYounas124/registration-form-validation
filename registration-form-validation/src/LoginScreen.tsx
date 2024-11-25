import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: (email: string) => void; // Function to handle login with email
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(email);  // Trigger the onLogin prop if needed
    navigate('/HomeScreen', { state: { email } });  // Pass the state to HomeScreen
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>

      <div className="social-login">
        <button className="social-button">
          <img src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" className="social-icon" />
          Google
        </button>
        <button className="social-button">
          <img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os" className="social-icon" />
          Apple
        </button>
      </div>

      <p className="separator"><span>or</span></p>

      <form onSubmit={handleLogin} className="login-form">
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <i className="material-symbols-outlined">mail</i>
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className="material-symbols-outlined">lock</i>
        </div>

        <a href="#" className="forgot-pass-link">Forgot Password</a>

        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="signup-text">Don&apos;t have an account?&nbsp;
        <a href="#">Signup now</a>
      </p>
    </div>
  );
};

export default Login;

