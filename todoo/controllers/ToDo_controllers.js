const mongoose = require("mongoose")
const list = require("../model/Todo")
const status = require("../util/status")
const asyncHandler = require("express-async-handler");

exports.showList = asyncHandler (async(req,res,next) => {
        const lists =  await list.find({},{"__v":false});
        // res.json({status:status.SUCCESS,data:{lists}});
        res.json(lists);
    // res.render("/ToDo")
});


exports.deleteMany = asyncHandler(async(req,res) => {
    const emptyList =  await list.deleteMany()  
    // res.json({status:status.SUCCESS,data:{emptyList}});
    res.json(emptyList);

})

exports.deleteOne = asyncHandler(async(req,res) => {
       const id = req.params.id;
       const lists = await list.deleteOne({_id:id})
    //    res.json({status:status.SUCCESS,data:{lists}});
        res.json(lists);

})

exports.add = asyncHandler(async(req,res,next) => {
        const addedList = new list(req.body);
        const lists = await addedList.save();
        // res.json({status:status.SUCCESS,data:lists});
        res.json(lists);

})

exports.update = asyncHandler( async(req,res) => {
       const id = req.params.id;
       const updated = await list.updateOne({_id:id},{$set:{...req.body}})
    //    res.json({status:status.ERROR,data:{updated}});
       res.json(updated);
})

exports.search = asyncHandler(async(req,res) => {
    const body = req.body.description
    console.log(body);
    const todo = await list.findOne({description:body})
    res.status(200).json(todo)
})

exports.done = asyncHandler ( async(req,res) => {
    console.log("hheerlsdvslk");
      const id = req.params.id;
      const todo = await list.findOne({_id:id});
      
      todo.done = true;
      res.status(200).json(todo);
})