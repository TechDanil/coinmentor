import { ErrorMessage, Field, FormikErrors, FormikTouched } from 'formik'
import { memo } from 'react'
import Button from '../../../ui/button/Button'
import { IInitialValuesForgot } from '../initialValues'
import styles from './ConfirmEmailBody.module.scss'

interface Props {
	values: IInitialValuesForgot
	errors: FormikErrors<IInitialValuesForgot>
	touched: FormikTouched<IInitialValuesForgot>
	isSubmitting: boolean
}

const ConfirmEmailBody = memo(
	({ values, errors, touched, isSubmitting }: Props) => {
		return (
			<div className={styles.form__block_body}>
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

				<Button>Send reset code</Button>
			</div>
		)
	}
)

export default ConfirmEmailBody
