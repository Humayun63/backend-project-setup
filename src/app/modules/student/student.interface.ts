export type IGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  mohterName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type IUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type ILocalGuardin = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type IStudent = {
  id?: string;
  name: IUserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emmergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardin: IGuardian;
  localGuardin: ILocalGuardin;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
