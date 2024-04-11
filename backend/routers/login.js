const express = require('express');
const router = express.Router();

const {emailExists, verified, userName} = require('../utils/users.js');


router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    if (await emailExists(email) === false) {
        return res.json({ msg: 'Email does not exist' });
    }
    else{
        if(await verified(email,password) === true){
            req.session.user =  await userName(email);
            return res.json({ login: true });
        }
        else{
            return res.json({ msg: 'Password is incorrect' });
        }
    }
});

    

module.exports = router;
