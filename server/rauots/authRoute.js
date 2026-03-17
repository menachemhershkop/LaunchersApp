import express from 'express';
import run from '../db/connect.js';
import { User } from '../modules/userModel.js';

export const authRoute = express();
const db = run().then((data) => data.collection('users'))

authRoute.post('/register/create', async (req, res) => {
    const { username, password, email, user_type, } = req.body
    if (!username, !password, !email, !user_type) {
        return res.status(401).json({ msg: 'Imported filed less' })
    }
    const create = await db.then((data) => data.insertOne(new User(1, username, password, email, user_type)))
    res.status(201).json({user:create.insertedId})
})

authRoute.put('register/update', (req, res) => {

})

authRoute.delete('register/delete/:id', (req, res) => {

})

authRoute.post('/login', (req, res) => {

})

authRoute.get('/getUser', (res, req) => {

})