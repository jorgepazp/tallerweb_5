'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema(
{
    nombre:String,

    precio:{type:Number},
    categoria:{type:String,enum:['computadores','telefonos']},
    descripcion:String

})

module.exports = mongoose.model('Product',ProductSchema)