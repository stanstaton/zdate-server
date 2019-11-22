let router = require('express').Router()
let db = require('../models')
require('dotenv').config()


router.get('/', (req,res) => {
    // res.send('nothing here right now')
    db.User.find()
    .then(foundUser => {
        res.send({foundUser})
    })
    .catch(err => {
        console.log(err)
        res.send('something fucked up bro')
    })
})

router.post('/newuser', (req, res) => {
    skills = req.body.skills
    skillsArray = skills.split(',')
    userObject = {
        name: req.body.name,
        skills: skillsArray,
        photo: req.body.photo.toString(),
        bio: req.body.bio
    }
    db.User.create(userObject)
    .then(newUser => {
        res.send({newUser})
    })
    .catch(err => {
        console.log(err)
        res.send('something fucked up bro')
    })
})

router.post('/ouruser', (req, res) => {
    skills = req.body.skills
    skillsArray = skills.split(',')
    userObject = {
        name: req.body.name,
        skills: skillsArray,
        photo: req.body.photo.toString(),
        bio: req.body.bio
    }
    db.OurUser.create(userObject)
    .then(newUser => {
        res.send({newUser})
    })
    .catch(err => {
        console.log(err)
        res.send('something fucked up bro')
    })
})

router.get('/ouruser', (req,res) => {
    db.OurUser.find()
    .then(foundUser => {
        res.send({foundUser})
    })
    .catch(err => {
        console.log(err)
        res.send('something fucked up bro')
    })
})


router.get('/:id', (req,res) => {
    db.User.findOne({_id: req.params.id})
    .then(foundUser => {
        res.send({foundUser})
    })
    .catch(err => {
        console.log(err)
        res.send({message: 'sorry something fucked up'})
    })
})


module.exports = router