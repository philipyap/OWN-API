const mongoose = require('mongoose')

//comments
const commentSchema= new mongoose.Schema({
    author:{
        type:String,
        default: 'Annonymous'
    },
    content: String,
    date: Date
})

//embedding in posts
//posts
const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [commentSchema]
})

module.exports = mongoose.model('Post', postSchema)

//how to add a comment to a post 

const post = new post({title:'Found Lost Pet', body:'Please contact us if you find it'})
post.comments.push({content:'We lost it', date: Date.now()})
post.save().then(()=>{
    // stuff
})

//Delete a comment
post.findById(req.params.id).then(post =>{
    post.id(req.params.commentId), remove()
    post.save()
})

//referencing documents
//products.js
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: Number
})
const Product = mongoose.model('Product', productSchema)

//orders.js
const orderSchema = new mongoose.Schema({
    orderDate: Date,
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

const Order = mongoose.model('Order', orderSchema)

//Access all products of an order
Order.findById(id).populate('produce').then(order=>{
    console.log(order.products)
})

let newOrder = new Order({date: DataCue.now()})
letnewProduct = new Product({name: 'bearings', price: 30})
newOrder.products.push(newProduct)
newOrder.products.push(new Product({name: 'wheels', price: 100}))
Order.save()