import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();
  const { loggedIn, toggleAuth } = useAuth();

  const handleAuth = () => {
    if (loggedIn) {
      toggleAuth();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2 rem",
        backgroundColor: theme === "dark" ? "black" : "#f5f5f5",
      }}
    >
      <Link
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          textDecoration: "none",
        }}
        to={"/"}
      >
        Home
      </Link>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/profile"}>profile</Link>
        <Link to={"/content"}>content</Link>
        <button onClick={handleAuth}>{loggedIn ? "Logout" : "Login"}</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Nav;
