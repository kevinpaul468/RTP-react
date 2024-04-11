const express = require('express')
const router = express.Router()

router.get('/api/getSessionUser', (req, res) => {
    console.log(req.session.user)
    res.json({ session: req.session.user })
})

module.exports = router;