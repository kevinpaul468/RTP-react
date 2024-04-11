const express = require('express')
const router = express.Router()

router.get('/api/getSessionUser', (req, res) => {
    res.json({ user: req.session.user })
})

module.exports = router;