import { FormikProvider, useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ADMIN_SCREEN } from '../../../configs/screens.config'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { LoginValidationSchema } from '../../../shared/validations/auth.validate'
import { isAuthSelector } from '../../../store/auth/auth.selectors'
import { IInitialValuesLogin, initialValuesLogin } from './initialValues'
import LoginFormBody from './loginFormBody/LoginFormBody'
import LoginFormHeader from './loginFormHeader/LoginFormHeader'

const LoginForm = () => {
	const { login } = useActions()
	const navigate = useNavigate()
	const isAuth = useTypedSelector(isAuthSelector)

	const formik = useFormik<IInitialValuesLogin>({
		initialValues: initialValuesLogin,
		validationSchema: LoginValidationSchema,
		onSubmit: async (values: IInitialValuesLogin) => {
			try {
				await login(values)
			} catch (error) {
				console.error('Error during login:', error)
			}
		},
	})

	useEffect(() => {
		if (isAuth) {
			navigate(ADMIN_SCREEN)
		}
	}, [isAuth, navigate])

	return (
		<FormikProvider value={formik}>
			<form onSubmit={formik.handleSubmit} className='login'>
				<div className='login__block active' id='l-login'>
					<LoginFormHeader />
					<LoginFormBody
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

export default LoginForm
