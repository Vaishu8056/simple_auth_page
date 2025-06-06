import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const { user } = useAuth();

  return (
    <div id="home" style={{ backgroundColor: "#fffaf0", minHeight: "100vh", padding: "40px", textAlign: "center" }}>
      <h1>Home Page</h1>

      {user ? (
        <>
          <p>Welcome back, <strong>{user.username}</strong>!</p>
          <Link to="/secret">Go to Secret Page 🔐</Link>
        </>
      ) : (
        <>
          <p>
            Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to continue.
          </p>
        </>
      )}

      <div style={{ marginTop: "40px" }}>
        <h3>About This Website</h3>
        <p>
          This is a demo authentication system using <strong>React Router v6</strong>.
          You can register a new account, login, and access a protected route (Secret Page).
        </p>
        <p>
          It uses <strong>React Context</strong> for auth state, and <strong>localStorage</strong> to persist the session.
        </p>
      </div>
    </div>
  );
}
