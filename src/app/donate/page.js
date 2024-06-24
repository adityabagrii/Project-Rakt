import React from 'react'
import './style.css'
import { auth } from '@/auth'
import Link from 'next/link'

const page = async () => {
    let reqs = []
    const session = await auth()

    if (!session) {
        return (
            <div className='main-donate'>
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
                const response = await fetch(`http://localhost:3000/api/requirements?email=${email}`, {
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
            <div className='main-donate'>
                <div className="text">
                    <h1>Donate Blood to save lives.</h1>
                    <h2>Here is the list of requirements in your area!</h2>
                </div>
                <div className="requirements">
                    {reqs.map((req) => (
                        <Requirement key={req._id} hName={req.hName} add1={req.add1} add2={req.add2} city={req.city} state={req.state} pName={req.pName} bGroup={req.bGroup} />
                    ))}
                </div>
            </div>
        )
    }
}

export default page

export const Requirement = (props) => {
  return (
    <div className='requirement-card'>
        <div className="hospital-deets">
            <p style={{fontWeight:"600"}}>Hospital Name: {props.hName}</p>
            <p style={{fontWeight:"600"}}>Location: {props.add1+", "+props.add2+", "+props.city+", "+props.state}</p>
        </div>
        <div className="patient-deets">
            <p>Patient Name: {props.pName}</p>
            <p>Blood Group: {props.bGroup}</p>
            <p>Show Interest</p>
        </div>
    </div>
  )
}

