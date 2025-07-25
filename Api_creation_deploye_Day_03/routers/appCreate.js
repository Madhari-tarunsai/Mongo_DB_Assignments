const express=require("express")
const routers=express("routers")
const {get_data,add,update,get_id_data,delete_data} = require("../controllers/controlertodos.js")
// creation of simple apis
routers.get("/get_data",get_data)
routers.post("/add",add)
routers.put("/update/:id",update)
routers.delete("/delete/:id",delete_data)
routers.get("/get/:id",get_id_data)
module.exports=routers