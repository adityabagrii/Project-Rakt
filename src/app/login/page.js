"use client"
import React from 'react'
import './login.css'
import {useSession, signIn, signOut} from 'next-auth/react'

export const page = () => {
  return (
    <div className='main-login'>
        <h1>Login to Rakt to ask or offer help!</h1>
        <button className='GitHub'><img src="./github.svg" alt="" />Login Using GitHub</button>
    </div>
  )
}

export default page