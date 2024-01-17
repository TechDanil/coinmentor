import { ErrorMessage, Field } from 'formik'
import styles from './ConfirmEmailBody.module.scss'

const ConfirmEmailBody = () => {
	return (
		<div className={styles.form__block_body}>
			<div className='form-group form-group--centered'>
				<Field
					id='email'
					// value={values.email}
					type='text'
					name='email'
					className={`form-control text-center${11 && 22 ? ' is-invalid' : ''}`}
					placeholder='Email Address'
				/>
				<ErrorMessage
					name='email'
					component='div'
					className='invalid-feedback'
				/>
			</div>
		</div>
	)
}

export default ConfirmEmailBody
