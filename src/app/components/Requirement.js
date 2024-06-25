"use client"
import React from 'react'
import { completeRequirement } from '../actions'
import { useRouter } from 'next/navigation'

const Requirement = (props) => {

    const Router = useRouter()

    function handleComplete(id){
        completeRequirement(id)
        Router.push('/dashboard')
    }

    return (
        <div className='requirement-card'>
            <div className="hospital-deets">
                <p style={{fontWeight:"600"}}>Hospital Name: {props.hName}</p>
                <p style={{fontWeight:"600"}}>Location: {props.add1+", "+ props.add2+", "+props.city+", "+props.state}</p>
            </div>
            <div className="patient-deets">
                <p>Patient Name: {props.pName}</p>
                <p>Blood Group: {props.bGroup}</p>
                <button onClick={()=>handleComplete(props.id)}>Click here if Completed</button>
            </div>
        </div>
    )
}

export default Requirement
