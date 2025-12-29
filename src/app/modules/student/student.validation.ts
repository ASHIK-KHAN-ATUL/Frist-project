import z from 'zod'

// ---------------- User Name ----------------
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(30, 'First name can not be more than 30 characters'),

  middleName: z.string().trim().optional(),

  lastName: z
    .string()
    .trim()
    .regex(/^[A-Za-z]+$/, {
      message: 'Last name must contain only letters',
    }),
})

// ---------------- Guardian ----------------
const guardianValidationSchema = z.object({
  fatherName: z.string().trim(),
  fatherOccupation: z.string().trim(),
  fatherContactNo: z.string().trim(),
  motherName: z.string().trim(),
  motherOccupation: z.string().trim(),
  motherContactNo: z.string().trim(),
})

// ---------------- Local Guardian ----------------
const localGuardianValidationSchema = z.object({
  name: z.string().trim(),
  occupation: z.string().trim(),
  contactNo: z.string().trim(),
  address: z.string().trim(),
})

// ---------------- Student ----------------
export const studentValidationSchema = z.object({
  id: z.string().trim(),

  name: userNameValidationSchema,

  gender: z.enum(['male', 'female']),

  dateOfBirth: z.string().trim().optional(),

  email: z.string().trim().toLowerCase().email('Invalid email address'),

  contactNo: z.string().trim(),

  emergencyContactNo: z.string().trim(),

  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),

  presentAddress: z.string().trim(),

  permanentAddress: z.string().trim(),

  guardian: guardianValidationSchema,

  localGuardian: localGuardianValidationSchema,

  profileImg: z.string().optional(),

  isActive: z.enum(['active', 'blocked']).default('active'),
})

export default studentValidationSchema
