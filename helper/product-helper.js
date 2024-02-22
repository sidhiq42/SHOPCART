const db=require('../config/db')
module.exports={
    addProduct: (product,cb)=>{
     console.log(product)
     db.get().collection('products').insertOne(product).then((data)=>{
        cb(true)
     })
    }
}