const router = require('express').Router()

router.get('/', (req, res)=>{
    try{
        
    }
    catch(err){
        req.send({
            'message': err.message
        })
    }
})



module.exports = router