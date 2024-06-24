"use client"
import React from 'react'
import '@/app/styles/req.css'
import {useState} from 'react'
import {useRouter} from 'next/navigation'

const RequestForm = (props) => {
    const router = useRouter()

    const [error, setError] = useState("")

    async function handleSubmit(event){
        event.preventDefault();
        try{
            const formData = new FormData(event.currentTarget)
            const email = props.email
            const pName = formData.get('pName')
            const hName = formData.get('hName')
            const bGroup = formData.get('bGroup')
            const add1 = formData.get('add1')
            const add2 = formData.get('add2')
            const city = formData.get('city')
            const pCode = formData.get('pCode')
            const state = formData.get('state')


            const response = await fetch('/api/rBlood', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({email, pName, hName, bGroup, add1, add2, city, pCode, state})
            })

            if(response.status === 201){
                router.push('/dashboard')
            }

            if(response.status === 500){
                setError("Request could not be created. Please try again later.")
                setTimeout(() => {
                    router.push('/dashboard')
                }, 1000)
            }

        } 
        catch(error){
            console.error(error.message)
        }
    }

return (
    <div className='main-signup'>
        <div className="error" style={{fontSize:"1vw", color:"red"}}>{error}</div>
        <form action="submit" className='signupForm' onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr className='rows'>
                        <td><label>Patient Name<p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="pName" name="pName" id="pName" placeholder="Enter Patient's Name" required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Hospital Name<p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="hName" name="hName" id="hName" placeholder="Enter Hospital Name" required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Blood Group <p style={{color:"red"}}>*</p></label></td>
                        <td>
                            <select className='inputs' type="text" name="bGroup" id="bGroup" defaultValue="" required>
                            <option value="" disabled>Choose required Blood Group</option>
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
                        <td><label>Hospital Address Line 1 <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="text" name="add1" id="add1" placeholder="Enter Hospital's Address Line 1" required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Hospital Address Line 2</label></td>
                        <td><input className='inputs' type="text" name="add2" id="add2" placeholder= "Enter Hospital's Address Line 2" /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Hospital City <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="text" name="city" id="city" placeholder="Enter Hospital's City" required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Hospital Pin Code <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="number" name="pCode" id="pCode" placeholder= "Enter Hospital's Pin Code" required /></td>
                    </tr>
                    <tr className='rows'>
                        <td><label>Hospital State <p style={{color:"red"}}>*</p></label></td>
                        <td><input className='inputs' type="text" name="state" id="state" placeholder="Enter Hospital's State" required /></td>
                    </tr>
                </tbody>
            </table>
            <button className='signup' type='submit' name='action'>Submit Request</button>
        </form>
    </div>
  )
};

export default RequestForm;