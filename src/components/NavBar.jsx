import { Link } from "react-router-dom";
import { useAuth } from "./KeycloakProvider";

const NavBar = () => {
  const { authenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <div className="navbar-container">
        <h1>KeyCloak App</h1>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <>
            <li>
              <div>Welcome!</div>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
