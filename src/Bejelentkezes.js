import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function Bejelentkezes() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
      navigate("/get");
    } else {
      alert('Login failed!');
    }
  }

  return (
    <div className="container-fluid d-flex justify-content-center h-100 login-container">
      <div className="card login-card" style={{ position: 'absolute', top: "50%", left: "50%", transform: 'translate(-50%, -50%)', }}>
        <div className="card-header login-card-header">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="input-group form-group">
              <input type="text" name="username" className="form-control my-2" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div className="input-group form-group">
              <input type="password" name="password" className="form-control my-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn btn-primary float-right login_btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}