import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      
      login({ email });
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="center-container">
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
};
