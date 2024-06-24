'use client'
import React from 'react';
import { doLogin } from '../actions';
import { useRouter } from 'next/navigation'
import {useState} from 'react'

const LoginForm = () => {
    const [error, setError] = useState("")
    const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await doLogin(formData);

        if (!!response.error) {
            setError(response.error.message)
        }
        else {
          router.push('/dashboard')
        }

    } catch (error) {
      console.error(error);
      setError("Check your credentials and try again")
    }
  }

  return (
    <>
    <div className="error" style={{color:"red", fontSize:"1vw"}}>{error}</div>
    <form className='login-form' onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><label>Email</label></td>
            <td><input className='inputs' type="email" name="email" id="email" placeholder='Enter your Email'/></td>
          </tr>
          <tr>
            <td><label>Password</label></td>
            <td><input className='inputs' type="password" name="password" id="password" placeholder='Enter your Password' /></td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Click here to Login</button>
    </form>
    </>
  );
};

export default LoginForm;