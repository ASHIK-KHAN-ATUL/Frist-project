import type { Request, Response } from 'express'
import { StudentServices } from './student.service.js'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body

    const result = await StudentServices.createStudentIntoDB(studentData)

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    })
  }
}

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDb()

    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params

    if (!studentId) {
      return res.status(400).json({
        success: false,
        message: 'Student ID is required',
      })
    }

    const result = await StudentServices.getSingleStudentFromDb(studentId)

    res.status(200).json({
      success: true,
      message: 'The Student data recived',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
}
