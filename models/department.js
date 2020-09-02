const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    pets:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet'
    }]
})
module.exports = mongoose.model('Department', departmentSchema)