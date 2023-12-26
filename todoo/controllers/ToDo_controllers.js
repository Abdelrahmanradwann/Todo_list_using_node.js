const mongoose = require("mongoose")
const list = require("../model/Todo")
const status = require("../util/status")

exports.showList = async(req,res,next) => {
    try{
        const lists =  await list.find({},{"__v":false});
        // res.json({status:status.SUCCESS,data:{lists}});
        res.json(lists);
    }
    catch(err){
        // res.json({status:status.ERROR,data:err.message});
        res.json({error:err.message})
    }
    // res.render("/ToDo")
};


exports.deleteMany = async(req,res) => {

    try{
    const emptyList =  await list.deleteMany()  
    // res.json({status:status.SUCCESS,data:{emptyList}});
    res.json(emptyList);
    }
    catch(err){
        // res.json({status:status.ERROR,data:err.message});
        res.json({error:err.message})
    }
}
exports.deleteOne = async(req,res) => {
    const id = req.params.id;
    try{
       const lists = await list.deleteOne({_id:id})
    //    res.json({status:status.SUCCESS,data:{lists}});
      res.json(lists);
    }
    catch(err){
        // res.json({status:status.ERROR,data:err.message});
        res.json({error:err.message})
    }

}

exports.add = async(req,res) => {

    if(!req.body.description){
        return res.json({error:"Description is required"});

     }

     try{
        const addedList = new list(req.body);
        const lists = await addedList.save();
        // res.json({status:status.SUCCESS,data:lists});
        res.json(lists);
     }
     catch(err){
        // res.json({status:status.ERROR,data:err.message});
        res.json({error:err.message})
     }
}

exports.update = async(req,res) => {
    try{
       const id = req.params.id;
       const updated = await list.updateOne({_id:id},{$set:{...req.body}})
    //    res.json({status:status.ERROR,data:{updated}});
    res.json(updated);

    }
    catch(err){
        // res.json({status:status.ERROR,data:err.message});
        res.json({error:err.message})

    }
}

exports.search = async(req,res) => {
    const body = req.body.description
    console.log(body);
    const todo = await list.findOne({description:body})
    res.status(200).json(todo)
}