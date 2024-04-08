import * as Yup from "yup";

export const babyRegistrationSchema = Yup.object({
  couple_id: Yup.string().required("Couple ID is required"),
  pregnancy_id: Yup.string().required("Pregnancy ID is required"),
  b_Name: Yup.string().required("Name of the Baby is required"),
  b_Reg_Num: Yup.string().required("Baby Registration Number is required"),
  b_Reg_Date: Yup.date().required("Date of Registration is required"),
  b_MOH_Division: Yup.string().required(
    "Division of Health Medical Officer is required"
  ),
  b_FSHO_Division: Yup.string().required(
    "Division of Family Health Service Officer is required"
  ),
  b_Mother_Age: Yup.number()
    .required("Age of Mother is required")
    .min(0, "Mother's age must be greater than or equal to 0")
    .max(150, "Mother's age must be less than or equal to 150"),
});


export const userRegistrationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  nicNo: Yup.string().matches(/^(?:\d{9}[xXvV]|\d{12})$/,'Nic must be valid Type').required('NIC No. is required'),
  birthday: Yup.string().required('Birthday is required'),
  contactNo: Yup.string().matches(/^\d{10}$/, 'Contact No. must be 10 digits').required('Contact No. is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  occupation: Yup.string().required('Occupation is required'),
  area: Yup.string().required('Area is required'),
  username: Yup.string().min(8, 'Username must be at least 8 characters').required('Username is required'),
  password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number. Minimum 8 characters.').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});


export const hospitalCareSchema = Yup.object({
  pregnancyRegNo: Yup.string().required('Pregnancy Registration Number is required'),
  eligibilityRegNo: Yup.string().required('Eligibility Registration Number is required'),
  clinicId: Yup.string().required('Clinic ID is required'),
  nextVisitDate: Yup.string().required('Date is required'),
  doctorId: Yup.string().required('Doctor ID is required'),
  designation: Yup.string().required('Designation is required'),
  
}) 	