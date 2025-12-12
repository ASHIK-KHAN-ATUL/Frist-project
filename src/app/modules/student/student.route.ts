import express from 'express'
import { StudentControllers } from './student.controller.js'

const router = express.Router()

// will call controller func

router.post('/create-student', StudentControllers.createStudent)

router.get('/', StudentControllers.getAllStudent)

router.get('/:studentId', StudentControllers.getSingleStudent)

export const StudentRoutes = router
