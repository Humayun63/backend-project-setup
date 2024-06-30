import { Schema, model } from 'mongoose';
import {
  IGuardian,
  IStudent,
  ILocalGuardin,
  IUserName,
} from './student.interface';

// ==================================
//  SCHEMAS STARTS
// ==================================

const userNameSchema = new Schema<IUserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<IGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  mohterName: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<ILocalGuardin>({
  name: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<IStudent>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emmergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: {
    type: String,
    required: true,
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
  guardin: guardianSchema,
  localGuardin: localGuardianSchema,
  profileImg: {
    type: String,
  },
  isActive: ['active', 'blocked'],
});

// ==================================
//  SCHEMAS ENDS
// ==================================

// ==================================
//  MODEL CREATION STARTS
// ==================================

export const Student = model<IStudent>('Student', studentSchema);

// ==================================
//  MODEL CREATION ENDS
// ==================================
