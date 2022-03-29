const router = require('express').Router()
const Paient = require('../model/patient');

router.post('/me', auth, async (req, res)=>{
    try{
        const reponse = Patient.get(req.user.id);
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
        const patient = new Patient(req.body);
        const response = await patient.save()
        res.send(response)
    }
    catch(err){
        req.send({
            'message': err.message
        })
    }
})




module.exports = router