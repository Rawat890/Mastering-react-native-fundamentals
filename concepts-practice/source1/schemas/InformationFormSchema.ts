import * as yup from 'yup';

export const InformationFormSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be of 10 digits').required('Phone number is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  addressLine1: yup.string().required('Address line 1 is required'),
  addressLine2: yup.string(),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  nationality: yup.string().required('Nationality is required'),
  pincode: yup.string().matches(/^[0-9]{6}$/, 'Pincode must be of 6 digits').required('Pincode is required'),
  highestEducationLevel: yup.string().required('Highest education level is required'),
  yearOfGraduation: yup.number()
    .min(1900, 'Year must be after 1900')
    .max(new Date().getFullYear(), 'Year cannot be in the future')
    .required('Year of graduation/post-graduation is required')
})