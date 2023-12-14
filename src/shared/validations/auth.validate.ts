import { object, string, boolean, ObjectSchema } from 'yup';
import { IInitialValuesLogin } from '../../components/shared/loginForm/initialValues';
import { IInitialValuesRegister } from '../../components/shared/registerForm/initialValues';

export const RegisterValidationSchema: ObjectSchema<IInitialValuesRegister> = object({
    email: string()
        .email('incorrect Email format!')
        .required('Email is required!'),
    password: string().required('Password is required!'),
    username: string().required('Username is required!'),
    isLicenseAccepted: boolean().required('License is required!').oneOf([true], "You must accept the license agreement!"),
});

export const LoginValidationSchema: ObjectSchema<IInitialValuesLogin> = object({
    email: string()
        .email('incorrect Email format!')
        .required('Email is required!'),
    password: string().required('Password is required!'),
});