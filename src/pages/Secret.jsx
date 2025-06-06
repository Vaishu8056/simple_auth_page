import { useAuth } from "../hooks/useAuth";

export const Secret = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Secret Page</h1>
      <p>Only logged in users can see this.</p>
      <p>Welcome, {user.username}!</p>
    </div>
  );
};
