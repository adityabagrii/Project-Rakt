import { dbConnect } from "@/lib/mongo"
import { NextResponse } from "next/server"
import { User } from "@/model/user-model"
import { Request } from "@/model/request-model"

export const GET = async (request) => {
    // Extract email from the request's URL query parameters
    const url = new URL(request.url)
    const email = url.searchParams.get("email")

    if (!email) {
        return new NextResponse("Email is required", {
            status: 400 // Bad Request
        })
    }

    console.log(email)
    await dbConnect()
    const user = await User.findOne({ email: email })
    const userCity = user.city
    const userState = user.state
    const requests = await Request.find({ city: userCity, state: userState, email: { $ne: email }, isCompleted: false})

    return new NextResponse(JSON.stringify(requests), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}