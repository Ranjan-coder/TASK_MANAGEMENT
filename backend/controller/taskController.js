const Task = require('../models/task.model')
const User = require('../models/user.model')


const CreateTask = async (req,res)=>{
    try {
        const { title, desc } = req.body;
        const { id } = req.headers;
        const newTask = new Task({title:title,desc:desc})

        const saveTask = await newTask.save();
        const taskId = saveTask._id

        await User.findByIdAndUpdate(id,{ $push: { tasks:taskId._id }})

        res.status(200).json({message: "Task Created"})

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error during task creation. Please try again later." });
    }
}

const GetAllTask = async (req,res)=>{
    try {

        // accessing user id from header 
        const { id } = req.headers;

        // populate will helps to show the task data , then we are sorting our data in descending order 
        // to show latest created task by help of options: {sort: {createdAt : -1}
        const userData = await User.findById(id).populate({path : "tasks",options: {sort: {createdAt : -1}}});
        res.status(200).json({data: userData})
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error while loading all tasks. Please try again later." });
    }

}

module.exports = {CreateTask,GetAllTask}