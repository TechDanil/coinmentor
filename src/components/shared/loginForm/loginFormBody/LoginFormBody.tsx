import { ErrorMessage, Field, FormikErrors, FormikTouched } from 'formik'
import { memo } from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { errorSelector } from '../../../../store/auth/auth.selectors'
import { IInitialValuesLogin } from '../initialValues'
import LoginFormFooter from '../loginFormFooter/LoginFormFooter'
import './LoginFormBody.scss'

interface Props {
	values: IInitialValuesLogin
	errors: FormikErrors<IInitialValuesLogin>
	touched: FormikTouched<IInitialValuesLogin>
	isSubmitting: boolean
}

const LoginFormBody = memo(
	({ values, errors, touched, isSubmitting }: Props) => {
		const error = useTypedSelector(errorSelector)

		return (
			<div className='login__block__body'>
				<div className='form-group form-group--centered'>
					<Field
						id='email'
						value={values.email}
						type='text'
						name='email'
						className={`form-control text-center${
							touched?.email && errors?.email ? ' is-invalid' : ''
						}`}
						placeholder='Email Address'
					/>
					<ErrorMessage
						name='email'
						component='div'
						className='invalid-feedback'
					/>
				</div>

				<div className='form-group form-group--centered'>
					<Field
						id='password'
						value={values.password}
						type='password'
						name='password'
						className={`form-control text-center${
							touched?.password && errors?.password ? ' is-invalid' : ''
						}`}
						placeholder='Password'
					/>
					<ErrorMessage
						name='password'
						component='div'
						className='invalid-feedback'
					/>
				</div>

				{error && (
					<div className={`text-center ${error ? 'error-loggining' : ''}`}>
						{typeof error === 'string'
							? error
							: (error as { message: string }).message}
					</div>
				)}

				<LoginFormFooter isSubmitting={isSubmitting} />
			</div>
		)
	}
)

export default LoginFormBody
