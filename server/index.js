import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path'
import { authMiddleware } from './utils/auth.js';
import dotenv from 'dotenv';

import typeDefs from './schemas/typeDefs.js'
import resolvers from './schemas/resolvers.js'

import db from './config/mongoConnection.js';

import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers
})


const startApolloServer = async() => {
    
    await server.start();
    app.use(cors({
        origin:[process.env.ORIGIN],
        method: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
      })
    );
    app.use(cookieParser());
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    app.use('/graphql', expressMiddleware(server, {context: authMiddleware}));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));
    
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    db.once('open', ()=> {
        app.listen(port, ()=> console.log(`live on port ${port}`));
    })
}

startApolloServer();
