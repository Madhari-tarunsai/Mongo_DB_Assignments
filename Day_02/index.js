const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/", { dbName: "application" })
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log("connection failed", err));


// middle wares
app.use(express.json());
app.use(express.urlencoded());


// user details
const userschema = new mongoose.Schema({
    user_name: { type: String },
    user_rollno: { type: Number, required: true },
    user_email: { type: String, required: true },
    user_phoneno: { type: Number, required: true }
});

const users = mongoose.model("user", userschema);

app.get("/", async(req, res) => {
    const data= await users.find()
    res.send({message:"i am from get_api/readdata",info:data});
});

app.post("/addUser", async(req, res) => {
    // res.send("im data added successfully");
    const abc=new users({user_name:req.body.user_name,
        user_rollno:req.body.user_rollno,
        user_email:req.body.user_email,
        user_phoneno:req.body.user_phoneno
    }
    )
    const saved=await abc.save()
    res.json({message:"data send sucessfully",data:saved});
    
});
app.put("/update/:id",async(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    const data= await users.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(data)
    console.log(data)
})

// employees details
const employeeschema=new mongoose.Schema({
    emp_name:{type:String, required:true},
    emp_dep:{type:String,required:true},
    emp_sal:{type:Number,required:true}

})
const employee=mongoose.model("employees",employeeschema)

app.post("/addemp",async(req,res)=>{
    const emp=new employee({emp_name:req.body.emp_name,
        emp_dep:req.body.emp_dep,
        emp_sal:req.body.emp_sal
    })
    const saved=await emp.save();
    res.json({message:"employee data added sucessfully",data:saved})

})
app.get("/emp", async(req, res) => {
    const data= await employee.find()
    res.send({message:"i am from get_api/readdata",info:data});
});

app.put("/update/:id",async(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    const data= await employee.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(data)
    console.log(data)
})

// dempartment details
const departschema=new mongoose.Schema({
    dep_name:{type:String ,required:true},
    dep_type:{type:String ,required:true},
    dep_status:{type:String,required:true} 
})
const dep=new mongoose.model("department",departschema)
app.post("/adddep",async(req,res)=>{
    const dem=new dep(req.body)
    const saved= await dem.save()
    res.send({message:"department added",data:saved})
})
app.get("/dep", async(req, res) => {
    const data= await dep.find()
    res.send({message:"i am from get_api/readdata",info:data});
});
app.put("/update/:id",async(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    const data= await dep.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(data)
    console.log(data)
})

app.listen(4000, () => console.log("server is running on port number 4000"));
