import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Secret } from "./pages/Secret";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import "./App.css"
function RedirectIfLoggedIn({ children }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <RedirectIfLoggedIn>
              <Login />
            </RedirectIfLoggedIn>
          }
        />

        <Route
          path="/register"
          element={
            <RedirectIfLoggedIn>
              <Register />
            </RedirectIfLoggedIn>
          }
        />

        <Route
          path="/secret"
          element={
            <ProtectedRoute>
              <Secret />
            </ProtectedRoute>
          }
        />

      
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
