const express = require('express')
const router = express.Router()

router.post('/api/logout',(req,res)=>{
    res.session.destroy((err)=>{
        if(err){
            res.json({logout : true})
        }else{
            res.json({logout : false})
        }
    }
)}
    )


module.exports = router;