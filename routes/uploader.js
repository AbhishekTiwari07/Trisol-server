const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Uploader = require('../model/uploader')
require('dotenv').config()

router.get('/me', auth, async (req, res)=>{
    try{
        const response = await Uploader.get(req.user.id);
        res.status(200).send(response)
    }
    catch(err){
        req.status(400).send({
            'message': err.message
        })
    }
})

router.post('/login', async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await Uploader.get({email});
        const key = process.env.KEY

        const isVerified = await bcrypt.compare(user.password, password);

        if(!isVerified)
            res.status(404).send('Password/Email incorrect');

        const token = await jwt.sign(email, key);

        res.status(200).send({
            token
        });
    }
    catch(err){
        res.status(400).json({
            'message': err.message
        })
    }
})

router.post('/register', async (req, res)=>{
    try{
        var {name, email, password} = req.body;
        const key = process.env.KEY

        password = await bcrypt.hash(password, 8);

        const uploader = new Uploader({name, email, password});
        const response = await uploader.save()
        res.status(200).send(response)
    }
    catch(err){
        req.status(400).send({
            'message': err.message
        })
    }
})



module.exports = router