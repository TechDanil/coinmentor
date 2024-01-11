import { ObjectSchema, boolean, object, string } from 'yup'
import { IInitialValuesLogin } from '../../components/shared/loginForm/initialValues'
import { IInitialValuesRegister } from '../../components/shared/registerForm/initialValues'

export const RegisterValidationSchema: ObjectSchema<IInitialValuesRegister> =
	object({
		email: string()
			.email('incorrect Email format!')
			.required('Email is required!'),
		password: string()
			.required('Password is required!')
			.min(6, 'Password must be at least 6 characters long'),
		username: string()
			.required('Username is required!')
			.min(5, 'Username must be at least 5 characters long'),
		isLicenseAccepted: boolean()
			.required('License is required!')
			.oneOf([true], 'You must accept the license agreement!'),
	})

export const LoginValidationSchema: ObjectSchema<IInitialValuesLogin> = object({
	email: string()
		.email('incorrect Email format!')
		.required('Email is required!'),
	password: string().required('Password is required!'),
})
