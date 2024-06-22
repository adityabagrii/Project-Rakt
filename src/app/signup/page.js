"use client"
import React from 'react'
import './signup.css'
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/navigation'

const SignUpPage = () => {

    const router = useRouter()

    const [error, setError] = useState("")

    async function handleSubmit(event){
        event.preventDefault();
        try{
            const formData = new FormData(event.currentTarget)
            const name = formData.get('name')
            const email = formData.get('email')
            const phone = formData.get('phone')
            const bGroup = formData.get('bGroup')
            const add1 = formData.get('add1')
            const add2 = formData.get('add2')
            const city = formData.get('city')
            const pCode = formData.get('pCode')
            const state = formData.get('state')
            const password = formData.get('password')
            const cpassword = formData.get('cpassword')
            if(password !== cpassword){
                setError("Passwords do not match")
                return
            }

            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, phone, bGroup, add1, add2, city, pCode, state, password})
            })

            if(response.status === 201){
                router.push('/login')
            }

            if(response.status === 400){
                setError("User already exists. Redirecting to login page...")
                // redirect to login page after 5 seconds
                setTimeout(() => {
                    router.push('/login')
                }, 1000)
            }

        } 
        catch(error){
            console.error(error.message)
        }
    }

return (
    <div className='main-signup'>
        <h1>Welcome to Rakt! Sign Up Here</h1>
        <div className="error" style={{fontSize:"1vw", color:"red"}}>{error}</div>
        <form action="submit" className='signupForm' onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr className='rows'>
                        <td><label>Name <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="name" name="name" id="name" placeholder='Enter your Name'required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Email <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="email" name="email" id="email" placeholder='Enter your Email'required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Phone Number <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="number" name="phone" id="phone" placeholder='Enter your Phone Number'required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Blood Group <p style={{color:"red"}}>*</p></label></td>
                        <td>
                            <select className='inputs' type="text" name="bGroup" id="bGroup" required>
                            <option value="" selected>Choose your Blood Group</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            </select>
                        </td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Address Line 1 <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="text" name="add1" id="add1" placeholder='Enter your Address Line 1'required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Address Line 2</label></td>
                        <td><input className='inputs' type="text" name="add2" id="add2" placeholder='Enter your Address Line 2'/></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>City <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="text" name="city" id="city" placeholder='Enter your City'required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Pin Code <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="number" name="pCode" id="pCode" placeholder='Enter your Pin Code'required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>State <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="text" name="state" id="state" placeholder='Enter your State'required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Password <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="password" name="password" id="password" placeholder='Enter your Password' required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Confirm Password <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="password" name="cpassword" id="cpassword" placeholder='Enter your Password again' required /></td>
                    </tr>
                </tbody>
            </table>
            <button className='signup' type='submit' name='action'>Sign Up</button>
        </form>
        <p>Already have an account? <Link href="/login" style={{color:"#710005"}}>Login Here</Link></p>
    </div>
  )
}

export default SignUpPage
