import React from 'react'
import '../styles/Navbar.css'
import Link from 'next/link'
import { auth } from '@/auth'
import { doLogout} from '@/app/actions'

const Navbar = async () => {

  const session = await auth()

  return (
    <nav>
        <div className="logo">
            <h1><Link href = {"/"}className="link">RAKT</Link></h1>
        </div>
        <div className="links">
            <ul>
                <li className='options'><Link href={"/"} className='link'>Home</Link></li>
                <li className='options'><Link href={"/about"} className='link'>About</Link></li>
                <li className='options'><Link href={"/contact"} className='link'>Contact</Link></li>
                {session ? <div className="loggedIn"><img src="./user.svg" alt="" /><form action={doLogout}><button type='submit' className='signupBtn'>Sign Out</button></form></div>: <li><Link href={"/login"} className="link"><button className='signupBtn'>Log In</button></Link></li>}
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
