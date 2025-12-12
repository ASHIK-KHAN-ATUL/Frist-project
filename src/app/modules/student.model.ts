import { Schema, model } from 'mongoose'
import {
  type Guardian,
  type LocalGuardian,
  type Student,
  type UserName,
} from './student/student.interface.js'

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: [true, 'FirstName is required'] },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'LastName is required'] },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, 'fatherName is required'] },
  fatherOccupation: {
    type: String,
    required: [true, 'fatherOccupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'fatherContactNo is required'],
  },
  motherName: { type: String, required: [true, 'motherName is required'] },
  motherOccupation: {
    type: String,
    required: [true, 'motherOccupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'motherContactNo is required'],
  },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'localGuardian name is required'] },
  occupation: {
    type: String,
    required: [true, 'localGuardian occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'localGuardian contactNo is required'],
  },
  address: {
    type: String,
    required: [true, 'localGuardian address is required'],
  },
})

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message:
        "The gender field can only be one of the following : 'male' or 'female'  ",
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
})

export const StudentModel = model<Student>('Student', studentSchema)
