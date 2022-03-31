//const express = require('express')
import express  from "express"
import cors from "cors"
import { dbConnection } from "../database/config.js"

//importar  rutas
import categorias from "../routes/categoria.js"
import auth from "../routes/auth.js"



class Server{
    constructor(){
        this.app=express()
        this.port = process.env.PORT
        this.middlewares()
        this.conexionDB()
        this.routes()
        }


routes(){
    this.app.use("/api/categoria", categorias),
    
    this.app.use("/api/auth",auth)
    
   

}

middlewares(){
    this.app.use(cors())
    this.app.use(express.static("public"))
    this.app.use(express.json())
}

async conexionDB(){
   await dbConnection()
}

   listen(){
       this.app.listen(this.port,()=>{
           console.log(`Servidor corriendo en ${this.port}`)
       })
   }
}



export {Server}


 