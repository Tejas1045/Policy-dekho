import Link from 'next/link'
import './NavBar.css'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav>
        <div className='nav-logo'> <Link href="/"><Image src={"/logo.svg"} width="220" height="60" alt="Policy Dekho" /></Link></div>
        <ul className='nav-links flex gap-8 items-center'>
            <li className=''><Link href="/car">Car Insurance</Link></li>
            <li><Link href="/bike">Bike Insurance</Link></li>
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