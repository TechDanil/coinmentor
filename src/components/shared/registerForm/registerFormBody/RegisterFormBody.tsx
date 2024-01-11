import { ErrorMessage, Field, FormikErrors, FormikTouched } from 'formik'
import { memo } from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { errorSelector } from '../../../../store/auth/auth.selectors'
import License from '../../../ui/license/License'
import { IInitialValuesRegister } from '../initialValues'
import RegisterFormFooter from '../registerFormFooter/RegisterFormFooter'
import './RegisterFormBody.scss'

interface Props {
	values: IInitialValuesRegister
	errors: FormikErrors<IInitialValuesRegister>
	touched: FormikTouched<IInitialValuesRegister>
	isSubmitting: boolean
}

const RegisterFormBody = memo(
	({ errors, touched, isSubmitting, values }: Props) => {
		const error = useTypedSelector(errorSelector)

		return (
			<div className='login__block__body'>
				<div className='form-group'>
					<Field
						id='username'
						value={values.username}
						type='text'
						name='username'
						className={`form-control text-center${
							touched?.username && errors?.username ? ' is-invalid' : ''
						}`}
						placeholder='Name'
					/>
					<ErrorMessage
						name='username'
						component='div'
						className='invalid-feedback'
					/>
				</div>

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

				<License />
				{error && (
					<div className={`text-center ${error ? 'error-registering' : ''}`}>
						{error}
					</div>
				)}
				<RegisterFormFooter isSubmitting={isSubmitting} />
			</div>
		)
	}
)

{
	/* className={`text-center${error ? 'error' : ''}`} */
}

export default RegisterFormBody
