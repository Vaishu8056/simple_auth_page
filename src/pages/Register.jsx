import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const Register = () => {
  const [username, setUsername] = useState("");
  const[email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (username && password) {
      login({ username });
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="center-container">
    <div className="reg">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div >
          <label>Username:</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div >
         <label>Email:</label>
                <input
              type="email"
                value={email}
               onChange={(e) => setEmail(e.target.value)}
                />
</div>

        <div >
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
    </div>
  );
};
