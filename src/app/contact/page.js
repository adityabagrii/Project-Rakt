'use client'
import React, { useState } from 'react'
import './contact.css'

const contact = () => {
  const [form, setform] = useState({
    name: '',
    email: '', 
    message: '', 
    phone: ''
  })

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='contact-main'>
      <h1 style={{fontSize: '3vw'}}>Contact Us</h1>
      <form action="submit" className='form'>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input onChange={handleChange} value={form.name} type="text" name="name" id="name" placeholder='Enter Your Name' required/></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input onChange={handleChange} value={form.email} type="email" name="email" id="email" placeholder='Enter Your Email' required/></td>
            </tr>
            <tr>
              <td>Message</td>
              <td><textarea onChange={handleChange} value={form.message} name="message" id="message" cols="30" rows="10" placeholder='Enter Your Message' ></textarea></td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td><input onChange={handleChange} value={form.phone} type="number" name="phone" id="phone" placeholder='Enter Your Phone Number' required/></td>
            </tr>
          </tbody>
        </table>
        <button className='submitBtn'>Submit</button>
      </form>
    </div>
  )
}

export default contact

