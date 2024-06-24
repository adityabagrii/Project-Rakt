import { Request } from '../model/request-model'

export async function createRequest(request){
    try{
        await Request.create(request)
    }
    catch(error){
        throw new Error(error)
    }
}