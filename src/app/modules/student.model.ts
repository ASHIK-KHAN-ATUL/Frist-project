import { Schema, model } from 'mongoose'
import {
  type Guardian,
  type LocalGuardian,
  type Student,
  type UserName,
} from './student/student.interface.js'

// ---------------- User Name Schema ----------------
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [30, 'First name can not be more than 30 characters'],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
        return firstNameStr === value
      },
      message: '{VALUE} is not in capitalize',
    },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
})

// ---------------- Guardian Schema ----------------
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required'],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact number is required'],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required'],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact number is required'],
    trim: true,
  },
})

// ---------------- Local Guardian Schema ----------------
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required'],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
    trim: true,
  },
})

// ---------------- Student Schema ----------------
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
    trim: true,
  },

  name: {
    type: userNameSchema,
    required: [true, 'Student name is required'],
  },

  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: "Gender must be either 'male' or 'female'",
    },
    required: [true, 'Gender is required'],
  },

  dateOfBirth: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },

  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true,
  },

  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
    trim: true,
  },

  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: 'Invalid blood group',
    },
  },

  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
    trim: true,
  },

  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
    trim: true,
  },

  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },

  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required'],
  },

  profileImg: {
    type: String,
  },

  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: "Status must be either 'active' or 'blocked'",
    },
    default: 'active',
  },
})

export const StudentModel = model<Student>('Student', studentSchema)
