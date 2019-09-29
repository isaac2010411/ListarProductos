const express = require('express');
const router = express.Router();

const producModel = require("../models/producto");


router.get('/', async (req, res) => {
       const productos = await producModel.find()
       res.json(productos)
});
router.get('/:id', async (req, res) => {
       const producto = await producModel.findById(req.params.id)
       res.json(producto)
});

router.post('/',async(req , res)=>{
       const {  titulo , marca   , descripcion   } = req.body;
       const newProduct = new producModel( {  titulo , marca  , descripcion   } )
       await newProduct.save();
       res.json({
              status:"producto guardado"
       })
      
})
router.put('/:id',async(req , res)=>{
       const { titulo , marca  , descripcion   } = req.body;
       const editProduct = {  titulo , marca   , descripcion  }
       await producModel.findByIdAndUpdate( req.params.id , editProduct)
       res.json({ status :" producto actualizado"})
       
})

router.delete('/:id',async (req,res)=>{
       await producModel.findOneAndRemove(req.params.id);
       res.json({
              status:"producto eliminado"
       })
})




module.exports = router ;