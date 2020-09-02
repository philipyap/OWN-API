const mongoose =require('mongoose')

//boy schema
let userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 90
    },
    nototriety: {
        default: 'Unknown'
    }
})

// create girl schema
let petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength:100
    },
    client:{
        type: String,
        required: true
    },
    reward:{
        type:Number,
        default: 100000
    },
    users:{userSchema},
    captured:{
        type:Boolean,
        default: false
    },
    lastSeen: String
})
module.exports = mongoose.model('Pet', petSchema)