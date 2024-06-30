export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  mohterName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type userName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type localGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id?: string;
  name: userName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emmergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardin: Guardian;
  localGuardin: localGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
