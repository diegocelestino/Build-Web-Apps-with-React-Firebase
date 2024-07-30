import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>myMoney</li>
            
            <Link to="/login"><li>Login</li></Link>
            <Link to="/signup"><li>SignUp</li></Link>
        </ul>
    </nav>
  )
}
