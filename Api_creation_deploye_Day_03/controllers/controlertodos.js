const {user}=require("../models/todoschema.js")

const get_data=async(req,res)=>{
    try{
        const toDoGet_Data=await  user.find();
        res.status(200).json({message:"todo_list",toDoGet_Data})
    }catch(err){
        console.log(err)
        res.status(400).json({message:"something went worng",err})

    }
   
}
const add=async(req,res)=>{
    try{
        const add_toDo=await user.create(req.body)
        res.status(200).json({message:"todo",add_toDo})
    }catch(err){
        console.log(err)
        res.status(400).json({message:"something went worng",err})

    }
    
}
const update = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedToDo = await user.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Todo updated", updatedToDo });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Something went wrong", err });
    }
};

const get_id_data=async(req,res)=>{
    const id=req.params.id
    try{
        const get_data=await user.findById(id)
        res.status(200).json({ message: "retrived the data from get_api",get_data });
    }catch(err){
        console.error(err);
        res.status(400).json({ message: "Something went wrong", err });

    }
    
}
const delete_data = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedItem = await user.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "No item found to delete" });
        }

        res.status(200).json({ message: "Item successfully deleted", deletedItem });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Something went wrong", error });
    }
};

module.exports={get_data,add,update,get_id_data,delete_data}