const router = require('express').Router()
const { CreateTask, GetAllTask } = require('../controller/taskController')
const AuthMiddleware = require('../middleware/middleware')

router.post('/createtask',AuthMiddleware,CreateTask)
router.get('/alltask',AuthMiddleware,GetAllTask)

module.exports = router