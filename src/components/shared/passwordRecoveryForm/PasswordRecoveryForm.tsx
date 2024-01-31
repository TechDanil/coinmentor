import styles from './PasswordRecoveryForm.module.scss'

const PasswordRecoveryForm = () => {
	return (
		<form className={styles.passwordRecovery__form}>
			<div className={styles.passwordRecovery}>
				<div className={styles.passwordRecovery__header}>
					<i className='zwicon-user-circle'></i>
					Rest your password
				</div>
			</div>
		</form>
	)
}

export default PasswordRecoveryForm
