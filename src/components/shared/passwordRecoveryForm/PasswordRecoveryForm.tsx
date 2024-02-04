import { ErrorMessage, Field, FormikProvider, useFormik } from 'formik'
import { ResetPasswordValidationSchema } from '../../../shared/validations/auth.validate'
import { classNames as cn } from '../../../utils/classNames/classNames'
import Button from '../../ui/button/Button'
import styles from './PasswordRecoveryForm.module.scss'
import { IInitialResetValues, initialResetValues } from './initialValues'

const PasswordRecoveryForm = () => {
	const formik = useFormik({
		initialValues: initialResetValues,
		validationSchema: ResetPasswordValidationSchema,
		onSubmit: async (values: IInitialResetValues) => {},
	})

	return (
		<FormikProvider value={formik}>
			<form className={styles.passwordRecovery__form}>
				<div
					className={cn([styles.passwordRecovery__form_block, styles.active])}
					id='l-register'
				>
					<div className={styles.passwordRecovery__form_header}>
						<i
							className='zwicon-user-circle'
							style={{ fontSize: '3rem', marginBottom: '0.6rem' }}
						></i>
						Rest your password
					</div>
					<div className={styles.passwordRecovery__form_body}>
						<div className={styles.passwordRecovery__form_body__block}>
							<Field
								id='email'
								// value={values.email}
								type='text'
								name='email'
								className={`form-control text-center`}
								placeholder='Enter your password'
							/>
							<ErrorMessage
								name='email'
								component='div'
								className='invalid-feedback'
							/>

							<Field
								id='email'
								// value={values.email}
								type='text'
								name='email'
								className={`form-control text-center`}
								placeholder='Repeat your password'
							/>
							<ErrorMessage
								name='email'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<Button>Agree</Button>
					</div>
				</div>
			</form>
		</FormikProvider>
	)
}

export default PasswordRecoveryForm
