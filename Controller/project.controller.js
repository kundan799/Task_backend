const  Project=require("../Models/project.models");

const createProject=async(req,res)=>{
    try{
        await Project.create(req.body);
        res.status(201).send({message:"Posted",error:false});

    }catch(err){
        res.status(500).send({message:err.message,error:true})
    }
}

const geteProject=async(req,res)=>{
    try {
        let data=await Project.find();
        res.status(200).send({message:data,error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true}) 
    }
}

const updateProject=async(req,res)=>{
    try {
        await Project.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
        res.status(200).send({message:"Updated",error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}

module.exports={createProject,geteProject,updateProject}