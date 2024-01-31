import { FormikProvider, useFormik } from 'formik'
import { ForgotPasswordValidationSchema } from '../../../shared/validations/auth.validate'
import styles from './ConfirmEmail.module.scss'
import ConfirmEmailBody from './confirmEmailBody/ConfirmEmailBody'
import ConfirmEmailHeader from './confirmEmailHeader/ConfirmEmailHeader'
import { IInitialValuesForgot, initialValuesForgot } from './initialValues'

const ConfirmEmail = () => {
	const formik = useFormik<IInitialValuesForgot>({
		initialValues: initialValuesForgot,
		validationSchema: ForgotPasswordValidationSchema,
		onSubmit: async (values: IInitialValuesForgot) => {},
	})

	return (
		<FormikProvider value={formik}>
			<form className={styles.form}>
				<div className={styles.form__block}>
					<ConfirmEmailHeader />
					<ConfirmEmailBody
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

export default ConfirmEmail
