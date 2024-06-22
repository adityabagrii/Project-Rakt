import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

import { User } from "./model/user-model"
import bcrypt from 'bcryptjs'

export const{
    handlers: {GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialProvider({
            async authorize(credentials){
                if(credentials==null) return null
                try{
                    const user = await User.findOne({email: credentials.email})
                    if(user){
                        const isMatch = await bcrypt.compare(credentials.password, user.password)
                        if(isMatch){
                            return user
                        } else {
                            throw new Error('Password does not match')
                        }
                    } else {
                        throw new Error('No user found')
                    }

                }
                catch(error){
                    throw new Error(error)
                }   
            }
        }),
    ]
})