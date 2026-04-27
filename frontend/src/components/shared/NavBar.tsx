import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <div className='nav-logo'> <Link href="/">Policy Dekho</Link></div>
        <ul className='nav-links flex gap-8 items-center'>
            <li className=''><Link href="/">Car Insurance</Link></li>
            <li><Link href="/">Bike Insurance</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Contact</Link></li>
        </ul>
        <div className='nav-cta'>
            <button className='btn-ghost'>Sign in</button>
        </div>
    </nav>
  )
}

export default NavBar