import type { Student } from './student.interface.js'
import { StudentModel } from '../student.model.js'

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find()
  return result
}

const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDb,
  getSingleStudentFromDb,
}
