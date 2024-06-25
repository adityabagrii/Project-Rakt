import { dbConnect } from "@/lib/mongo"
import { NextResponse } from "next/server"
import { User } from "@/model/user-model"
import { Request } from "@/model/request-model"

export const GET = async (request) => {
    // Extract email from the request's URL query parameters
    await dbConnect()
    const url = new URL(request.url)
    const email = url.searchParams.get("email")
    const requests  = await Request.find({ email: email, isCompleted: false })
    return NextResponse.json(requests)  
}

export const POST = async (request) => {
    await dbConnect()
    const req = await request.json()
    const id = req.id

    const updatedRequest = await Request.findByIdAndUpdate(
        id, 
        { isCompleted: true },
        { new: true }
    );

    if (updatedRequest) {
        return NextResponse.json({status:200, message: "Requirement Completed", updatedRequest });
    } else {
        return NextResponse.json({ message: "Request not found" }, { status: 404 });
    }
}