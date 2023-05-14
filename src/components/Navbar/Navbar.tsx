import Link from 'next/link';
import styles from './navbar.module.css'

function Navbar() {
  return (
    <>
    <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar