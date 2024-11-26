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
    onLogin(email); // Trigger the onLogin prop
    navigate('/homescreen', { state: { email } }); // Pass email to HomeScreen
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h2 className="form-title"><b>Log in with</b></h2>
          </div>
          <div className="card-body">
            <div className="social-login text-center mb-3">
              <button className="btn btn-block btn-outline-primary mb-2">
                <img
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="Google Logo"
                  className="mr-2"
                  style={{ width: '20px' }}
                />
                Google
              </button>
              <button className="btn btn-block btn-outline-secondary">
                <img
                  src="https://img.icons8.com/ios-filled/50/mac-os.png"
                  alt="Apple Logo"
                  className="mr-2"
                  style={{ width: '20px' }}
                />
                Apple
              </button>
            </div>

            <p className="text-center mb-3"><span>or</span></p>

            <form onSubmit={handleLogin} className="login-form">
              <div className="input-group mb-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <a href="#" className="forgot-pass-link text-decoration-none">Forgot Password?</a>
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </div>
            </form>

            <p className="signup-text text-center">
              Don&apos;t have an account?&nbsp;
              <a href="#" className="text-primary">Signup now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
