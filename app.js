import express from "express"
import dotenv from "dotenv";
dotenv.config()
const port=process.env.port
console.log(port)
var app=express()
app.get("/",(req,res)=>{
res.send("hay")
})
app.listen(port,()=>{
  console.log(`server invoked at http: ${port}`)
})