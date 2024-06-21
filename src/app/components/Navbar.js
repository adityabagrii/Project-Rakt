import React from 'react'
import '../styles/Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <h1><Link href = {"/"}className="link">RAKT</Link></h1>
        </div>
        <div className="links">
            <ul>
                <li><Link href={"/"} className='link'>Home</Link></li>
                <li><Link href={"/about"} className='link'>About</Link></li>
                <li><Link href={"/contact"} className='link'>Contact</Link></li>
                <li><Link href={"/donate"} className="link">Donate</Link></li>
                <li><Link href={"/login"} className="link">Login</Link></li>
                <li><Link href={"/signup"} className="link"><button className='signupBtn'>SignUp</button></Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
