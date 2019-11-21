let router = require('express').Router()
let db = require('../models')
require('dotenv').config()


router.get('/', (req,res) => {
    res.send('nothing here right now')
})

router.post('/newuser', (req, res) => {
    db.User.create(req.body)
    .then(newUser => {
        res.send({newUser})
    })
})

router.post('/ouruser', (req, res) => {
    db.OurUser.create(req.body)
    .then(newUser => {
        res.send({newUser})
    })
})

router.get('/ouruser', (req,res) => {
    res.send('stub route motherfucker')
})


router.get('/:id', (req,res) => {
    res.send('nothing to see here yet')
})


module.exports = router