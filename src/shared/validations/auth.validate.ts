import { object, string } from 'yup';

export const RegisterValidationSchema = object({
    email: string()
        .email('incorrect Email format!')
        .required('Email is required!'),
    password: string().required('Password is required!'),
    username: string().required('Username is required!'),
});