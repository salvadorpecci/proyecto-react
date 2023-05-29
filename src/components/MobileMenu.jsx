import { useState } from 'react'
import Hamburger from './Hamburger'
import MobileLinks from './MobileLinks'

export default function MobileMenu () {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div>
      <div className='hamburger'>
        <Hamburger isNavOpen={isNavOpen}  setIsNavOpen={setIsNavOpen} />
      </div>
      <MobileLinks isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </div>
  )
}
