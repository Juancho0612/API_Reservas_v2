const express = require('express')
//se llama a router
const router = express.Router()

const bdReservas = require('../bd/bdReserves.json')

//gestionar reservas

//obtener reservas
router.get('/',(req,res)=>{
  res.json(bdReservas)
})

//crear reservas
router.post('/',(req,res)=>{
  console.log(req.body)
  const {tipo,fecha,hora,personas,numeroMesa}=req.body
  if(tipo && fecha && hora && personas && numeroMesa){
    const id = bdReservas.length +1
    const newReserve = {...req.body,id}
    bdReservas.push(newReserve)
    res.json(bdReservas)
  }else{
    res.send('petición fallida🥲')
  }
})

//exportar router
module.exports = router





