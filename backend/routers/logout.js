const express = require('express')
const router = express.Router()

router.post('/api/logout',(req,res)=>{
    console.log(req.session)
    req.session.destroy((err)=>{
        if(err){
            res.json({logout : false})
        }else{
            res.json({logout : true})
        }
    }
)}
    )


module.exports = router;