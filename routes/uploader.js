const router = require('express').Router()
const Uploader = require('../model/uploader')

router.post('/me', auth, async (req, res)=>{
    try{
        const reponse = Uploader.get(req.user.id);
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
        const uploader = new Uploader(req.body);
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