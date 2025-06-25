import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Nav from "../../components/Nav";

const Login = () => {
  const { loggedIn, toggleAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/";

  const handleLogin = () => {
    toggleAuth();
    navigate(afterLoginGoTo, { replace: true });
  };

  return (
    <>
      <Nav />
      <div style={{ padding: "2rem" }}>
        <h2>Login page</h2>
        {loggedIn ? (
          <p>you are already logged in.</p>
        ) : (
          <button onClick={handleLogin}>Click to Login</button>
        )}
      </div>
    </>
  );
};
export default Login;
