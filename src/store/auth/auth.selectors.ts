import { RootState } from '..'

export const isAuthSelector = (state: RootState) => state.auth.isAuth
export const isErrorSelector = (state: RootState) => state.auth.isError
export const isLoadingSelector = (state: RootState) => state.auth.isLoading
export const userSelector = (state: RootState) => state.auth.user
export const errorSelector = (state: RootState) => state.auth.error
export const isVerifiedSelector = (state: RootState) => state.auth.isVerified
export const isLicenseAcceptedSelector = (state: RootState) =>
	state.auth.isLicenseAccepted
