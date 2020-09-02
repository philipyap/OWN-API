const router = require('express').Router()

//import models
const db = require('../models')

//GET / users

router.get('/', (res, req)=>{
    db.Pet.find()
    .then(foundPets =>{
        console.log(foundPets)
        res.setEncoding(foundPets)
    })
    .catch(err=>{
        console.log(err)
        res.statusCode(503).send({message: 'DataBase asleep ?'})
    })
})

router.get('/:id', (req, res)=>{
     db.Pet.findById(req.params.id)
     .then(foundPet=>{
         if(foundPet){
             res.send(foundPet)
         } else {
             res.status(404).send({message: 'Resource not located'})
         }
     })
     .catch(err=>{
         console.log(err)
         res.status(503).send({message: 'Service Unavailable'})
     })
})

router.post('/', (req, res)=>{
    db.Pet.create(req.body)
    .then(createdPet=> {
        res.status(201).send(createdPet)
    })
    .catch(err=>{
        console.log('Error while creating new pet', err)
        if(err.name === 'Validation Error'){
            res.status(406).send({message: 'Valadation Error'})
        } else {
            res.status(503).send ({message: 'Database or server error'})
        }
    })
})

router.put('/:id', (req, res)=>{
    db.Pet.findOneAndUpdate({
        _id: req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(updatedPet=>{
        res.send(updatedPet)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
})

router.delete('/', (req, res)=>{
    db.Pet.deleteMany()
    .then(()=>{
        res.send({message: 'They are all gone'})
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
})

router.delete('/:id', (req, res)=>{
    db.Pet.findByIdAndDelete(req.params.id)
    .then(()=>{
        res,status(204).send({message: 'Server Error'})

    })
})
module.exports = router 