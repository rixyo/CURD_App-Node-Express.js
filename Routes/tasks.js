const { Router } = require('express')
const express=require('express')
const route=express.Router()
const 
{getTasks,createTasks,updateTask,deleteTask,getSingleTask}=require("../controllers/tasks")


route.route("/").get(getTasks).post(createTasks)
route.route("/:id").patch(updateTask).get(getSingleTask).delete(deleteTask)
















module.exports=route