const router = require('express').Router()
const Doctor = require('../model/doctor')

router.post('/me', auth, async (req, res)=>{
    try{
        const response = Doctor.get(req.user.id);
        res.send(response)
    }
    catch(err){
        req.send({
            'message': err.message
        })
    }
})

router.post('/register', async (req, res)=>{
    try{
        const doctor = new Doctor(req.body);
        const response = await doctor.save()
        res.send(response)
    }
    catch(err){
        req.send({
            'message': err.message
        })
    }
})



module.exports = router