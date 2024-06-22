import { NextResponse } from "next/server"
import { createUser } from "@/queries/users"
import bcrypt from "bcryptjs"
import { dbConnect } from "@/lib/mongo"

import { User } from "@/model/user-model"
import { redirect } from "next/dist/server/api-utils"

export const POST = async (request) => {
    const {name, email, phone, bGroup, add1, add2, city, pCode, state, password} = await request.json()

    // Create a DB Connection
    await dbConnect()
    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 5)
    // Form a DB Payload
    const newUser = {
        name,
        email,
        phone,
        bGroup,
        add1,
        add2,
        city,
        pCode,
        state,
        password: hashedPassword
    }

    // Check if the user already exists
    const user = await User.findOne({email: newUser.email})
    
    if(user){
        // redirect to login page
        return new NextResponse("User already exists", {
            status: 400
        })
    }

    // Update the DB
    try{
        
        await createUser(newUser)
    }
    catch(error){
        return new NextResponse(error.message, {
            status: 500
        })
    }
    return new NextResponse("User has been created", {
        status: 201
    })
}