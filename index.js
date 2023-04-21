const express = require('express')
const apiRouter = require('./server')
const app = express()
const morgan = require('morgan')
require('dotenv').config()

//Middlewares, intermedirias de trasferencia y peticiones de respuesta
app.use(express.json())


//ruta principal
app.get('/',(req,res)=>{
  res.send('→ Raiz de la API ←')
})

//apiRouter se encarga de controlar las rutas generadas
apiRouter(app)
const port = process.env.PORT || 3000


app.listen(port,()=>{
  console.log('API en funcionamiento en el puerto '+ port)
})
