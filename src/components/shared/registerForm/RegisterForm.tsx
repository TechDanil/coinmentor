import { FormikProvider, useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ADMIN_SCREEN } from '../../../configs/screens.config'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { RegisterValidationSchema } from '../../../shared/validations/auth.validate'
import {
	isAuthSelector,
	isErrorSelector,
	isLicenseAcceptedSelector,
} from '../../../store/auth/auth.selectors'
import { IInitialValuesRegister, initialValuesRegister } from './initialValues'
import RegisterFormBody from './registerFormBody/RegisterFormBody'
import RegisterFormHeader from './registerFormHeader/RegisterFormHeader'

const RegisterForm = () => {
	const { register } = useActions()
	const isError = useTypedSelector(isErrorSelector)
	const isAuth = useTypedSelector(isAuthSelector)
	const isLicenseAccepted = useTypedSelector(isLicenseAcceptedSelector)

	const navigate = useNavigate()

	const formik = useFormik<IInitialValuesRegister>({
		initialValues: initialValuesRegister,
		validationSchema: RegisterValidationSchema,
		onSubmit: async (values: IInitialValuesRegister) => {
			if (!values.isLicenseAccepted) {
				formik.setFieldError(
					'isLicenseAccepted',
					'Accept the license agreement, try again!'
				)
				return
			}

			await register({ ...values })
		},
	})

	useEffect(() => {
		if (!isError && isAuth && isLicenseAccepted) {
			console.log('Registration successful. Navigating to admin page...')
			navigate(ADMIN_SCREEN)
		}
	}, [isError, isAuth, isLicenseAccepted, navigate])

	return (
		<FormikProvider value={formik}>
			<form onSubmit={formik.handleSubmit} className='login'>
				<div className='login__block active' id='l-register'>
					<RegisterFormHeader />
					<RegisterFormBody
						values={formik.values}
						errors={formik.errors}
						touched={formik.touched}
						isSubmitting={formik.isSubmitting}
					/>
				</div>
			</form>
		</FormikProvider>
	)
}

export default RegisterForm
