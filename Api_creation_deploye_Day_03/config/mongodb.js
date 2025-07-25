const mongoose=require("mongoose")
// function creation
async function conntect_dataBase(){
    try{
        const mongodb=await mongoose.connect("mongodb://localhost:27017/",{dbName:"todo_application"})
        console.log("database connected sucessfully")

    }catch(error){
        console.log("database not connected please check the connections")

    }
}
module.exports={conntect_dataBase}