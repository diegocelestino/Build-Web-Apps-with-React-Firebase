import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import styles from "./Navbar.module.css";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>

        {!user && (
          <>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/signup">
              <li>SignUp</li>
            </Link>
          </>
        )}

        {user && (
          <>
            <li>hello {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
