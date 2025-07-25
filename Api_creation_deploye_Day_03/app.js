const express=require("express")
const app=express()
const appcreate=require("./routers/appCreate.js")
const {conntect_dataBase} = require("./config/mongodb.js")


// function call
conntect_dataBase()
// inistilsaion of port number
const port=2000
// middle wares 
app.use(express.json())
app.use(express.urlencoded())
// default api creation
app.get("/",(req,res)=>{
    res.status(200).send("im default api to checking api")
})
// routers api
app.use("/api/tods/",appcreate)

app.listen(port,()=>console.log("server is runing on port number is " + port))