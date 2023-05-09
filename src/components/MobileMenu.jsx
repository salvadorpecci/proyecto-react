import { useState } from 'react'
import Hamburger from './Hamburger'
import MobileLinks from './MobileLinks'
import styles from './NavBar.module.css'

export default function MobileMenu () {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div>
      <div className={styles.hamburger}>
        <Hamburger isNavOpen={isNavOpen}  setIsNavOpen={setIsNavOpen} />
      </div>
      <MobileLinks isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </div>
  )
}
