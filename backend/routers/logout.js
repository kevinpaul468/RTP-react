const express = require('express')
const router = express.Router()

router.post('/api/logout',(req,res)=>{
    res.session.destroy((err)=>{
        if(err){
            res.status(500).json({message:"Error in logout"})
        }else{
            res.status(200).json({message:"Logout success"})
        }
    }
)}
    )


module.exports = router;