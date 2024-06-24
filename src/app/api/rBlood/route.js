import { dbConnect } from "@/lib/mongo"
import { NextResponse } from "next/server"
import { createRequest} from "@/queries/requests"

export const POST = async (request) => {
    const {email, pName, hName, bGroup, add1, add2, city, pCode, state} = await request.json()
    await dbConnect()
    const newRequest = {
        email,
        pName,
        hName,
        bGroup,
        add1,
        add2,
        city,
        pCode,
        state
    }
    try{
        await createRequest(newRequest)
    }
    catch(error){
        return new NextResponse(error.message, {
            status: 500
        })
    }

    return new NextResponse("Request has been created", {
        status: 201
    })
}