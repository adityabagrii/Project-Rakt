import React from 'react'
import './request.css'
import { auth } from '@/auth'
import Link from 'next/link'
import RequestForm from '@/app/components/RequestForm'


const page = async () => {

    const session = await auth()

    if (!session) {
        return (
            <div className='main-request'>
                <h1>Access Denied</h1>
                <p>You need to be logged in to access this page</p>
                <p>Click <Link href='/login'>here</Link> to login</p>
            </div>
        )
    }
    else{
        return (
            <div className='main-request'>
                <h1>Dear {session.user.name}, Tell us about your requirement</h1>
                <RequestForm email = {session.user.email}/>
            </div>
          )
    }

}

export default page
