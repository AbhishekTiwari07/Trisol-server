const jwt = require('jsonwebtoken');
const Patient = require('../model/patient');


const auth = async (req, res, next)=>{
    try{
        const token = req.header.authorization.split('Bearer ')[0];
        const id = ''
        const user = await Patient.get(id);
        req.user = user;
    }
    catch(e){
        res.json({
            'message': e.message
        })
    }
    next()
}