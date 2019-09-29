
const mongoose=require('mongoose');
var productSchema = new mongoose.Schema({
    titulo: String,
    marca:String,
    descripcion: String,
  });
  module.exports = mongoose.model("producto", productSchema);
