import React from 'react'
import './dashboard.css'
import { auth } from '@/auth'
import Link from 'next/link'

const page = async () => {

    const session = await auth()

    if (!session) {
        return (
            <div className='main-dashboard'>
                <h1>Access Denied</h1>
                <p>You need to be logged in to access this page</p>
                <p>Click <Link href='/login'>here</Link> to login</p>
            </div>
        )
    }
    else{
        return (
            <div className='main-dashboard'>
                <h1>Welcome! {session.user.name}</h1>
                <div className='btns'>
                    <Link href={"/donate"}><button className='buttons'>Donote Blood</button></Link>
                    <Link href={"/request"}><button className='buttons'>Request Blood</button></Link>
                </div>
            </div>
          )
    }

}

export default page
