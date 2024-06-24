import React from 'react'
import './login.css'
import Loginform from '../components/Loginform'
import Link from 'next/link'

export const page = () => {

  return (
    <div className='main-login'>
        <h1>Login to Rakt to ask or offer help</h1>
        <Loginform />
        <p>Don't have an account? <Link href='/signup' className='signLink'>Sign Up</Link></p>
    </div>
  )
}

export default page