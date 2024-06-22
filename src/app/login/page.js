import React from 'react'
import './login.css'
import Loginform from '../components/Loginform'
import Link from 'next/link'

export const page = () => {

    async function handleSubmit (event){
        event.preventDefault();

        try{
            const formData = new FormData(event.currentTarget)

            const response = await doLogin(formData)

            if(!!response.error){

            } else{
                redirect('/')
            }

        }
        catch(error){
            console.error(error)
        }

    }

  return (
    <div className='main-login'>
        <h1>Login to Rakt to ask or offer help</h1>
        <Loginform />
        <p>Don't have an account? <Link href='/signup' className='signLink'>Sign Up</Link></p>
    </div>
  )
}

export default page