import { GraphQLError } from "graphql";
import jwt from 'jsonwebtoken';

const expiration = '30';

export const AuthenticationError = new GraphQLError('Could not authenticate user.',{
    extensions:{
        code: 'UNAUTHENTICATED'
    }
})

export function authMiddleware({req}){
    let token = req.body.token || req.query.token || req.headers.authorization;

    if(req.headers.authorization){
        token = token.split(' ').pop().trim();
    }

    if(!token){
        return req;
    }

    try{
        const {data} = jwt.verify(token, process.env.JWT_KEY, {maxAge: expiration} );
        req.user = data; 
    }catch{
        console.log('invalid token');
    }
    return req;
}