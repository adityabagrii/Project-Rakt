import React from 'react'
import './styles.css'
import { auth } from '@/auth'
import Link from 'next/link'
import Requirement from '../components/Requirement'

const page = async () => {
    let reqs = []
    const session = await auth()

    if (!session) {
        return (
            <div className='main-myreqs'>
                <h1>Access Denied</h1>
                <p>You need to be logged in to access this page</p>
                <p>Click <Link href='/login'>here</Link> to login</p>
            </div>
        )
    }
    else{

        async function getRequirements() {
            try {
                // Assuming session.user.email needs to be sent as a query parameter
                const email = (session.user.email);
                const response = await fetch(`http://localhost:3000/api/myreqs?email=${email}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if(response.status === 200){
                    const data = await response.json();
                    reqs = data;
                }
            } catch (error) {
                console.error(error.message);
            }
        }

        await getRequirements()

        return (
            <div className='main-myreqs'>
                <div className="text">
                    <h2>Here is the list of requirements by You</h2>
                </div>
                {reqs.length === 0 && <h1>No requirements</h1>}
                {reqs.length !== 0 && <div className="requirements">{reqs.map((req) => (<Requirement key={req._id} id = {req._id} hName={req.hName} add1={req.add1} add2={req.add2} city={req.city} state={req.state} pName={req.pName} bGroup={req.bGroup} />))}</div>}
            </div>
        )
    }
}

export default page