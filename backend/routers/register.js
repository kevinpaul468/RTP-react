const express = require('express')
const router = express.Router()
const { emailExists, addEmail } = require('../utils/users')

router.post('/api/register', async (req, res) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,64}$/;
    const { name, email, password, password2 } = req.body
    if (!name || !email || !password || !password2) {
        return res.json({ msg: 'Please enter all fields' })
    }
    if(!pattern.test(password)){
        return res.json({ msg: 'Password must contain at least 8 characters, including uppercase, lowercase, number and special character' })
    }
    else if (password !== password2) {
        return res.json({ msg: 'Passwords do not match' })
    }
    else
    {
        if (await emailExists(email) === false) {
            await addEmail(name, email, password);
            return res.status(201).json({ msg: 'Registered' })
        }
        return res.json({ msg: 'Email already exists' })
    }
})


module.exports = router