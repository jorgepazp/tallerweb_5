'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express() 

const endpoints = require('./endpoints')
const Producto = require('./modelos/producto')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.status(200).send({message:"Best of best"})

})

app.get('/api/productos',(req,res)=>{

    res.status(200).send('Aqui van los productos')

})

app.get('/api/productos/:productId',(req,res)=>{

    let ProductId = req.params.productId
    Product.findById(ProductId,(err,product)=>{
        if(err) return res.status(500).send({message:'error al realizar peticion'})
        if(!product) return res.status(404).send({message:'Error el producto no existe'})

        res.status(200).send({product})

    })

   
})

app.post('/api/productos',(req,res)=>{
   
    let producto = new Producto()
    product.nombre = req.body.nombre
    product.precio = req.body.precio 
    product.categoria = req.body.categoria
    product.descripion = req.body.descripcion

    producto.save((err,productStore)=>{

        if(err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({producto:productStore})

    })
   


})


mongoose.connect('mongodb+srv://jurgensen:<374374abcdin>@cluster0-agbzi.mongodb.net/test?retryWrites=true&w=majority',(err,res)=>{

    if(err) throw err 
    console.log('Conexion establecida')

    app.listen(3000,()=>{

        console.log("Esta corriendo en puerto 3000")
    })

})
