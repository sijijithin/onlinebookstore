require('dotenv').config()
const express =require('express')
const cors =require('cors')
require('./DB-connection/connection')
const router =require('./Routes/router');


const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

const PORT= 4000 || Process.env.PORT

server.listen(PORT,()=>{
    console.log(`Online book server started at port ${PORT}`);
})

server.get('/', (req,res)=>{
    res.send(" <h1> onlinebook Server started !!!")
})