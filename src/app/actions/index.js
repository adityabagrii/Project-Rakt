"use server"
import { signIn, signOut } from "@/auth"
import { redirect } from "next/dist/server/api-utils"

export async function doLogout(){
    await signOut({redirectTo: "/"})
}

export async function doLogin(formData){
    try{
        const response  = await signIn('credentials', { 
            redirectTo: "/",
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false

        })
        return response
    }
    catch(error){
        console.error(error)
    }   
}

export async function completeRequirement(id){
    try{
        const response = await fetch(`http://localhost:3000/api/myreqs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        })
    }
    catch(error){
        console.error(error)
    }
}