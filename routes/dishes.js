const express  = require('express')
const router  = express.Router()

router.get('/',(req,res)=>{
  res.send('🍟Ruta dishes🍟')
})


//exportar router
module.exports = router
