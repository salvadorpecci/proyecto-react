import MobileMenu from "./MobileMenu"
import DesktopLinks from './DesktopLinks'
import styles from './NavBar.module.css'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <header className={styles.relative}>
            <h1><Link to={'/'}>My todo list</Link></h1>
            <nav>
                <MobileMenu />
                <DesktopLinks />
            </nav>
        </header>
    )
}