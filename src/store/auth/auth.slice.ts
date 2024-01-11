import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../shared/interfaces/user.interface'
import { login, logout, register } from './auth.actions'

interface IInitialState {
	user: IUser | null
	error: string | null
	isLoading: boolean
	isError: boolean
	isVerified: boolean
	isAuth: boolean
	isLicenseAccepted: boolean
}

const storedUser = localStorage.getItem('user')
const initialState: IInitialState = {
	user: storedUser ? JSON.parse(storedUser) : null,
	error: null,
	isLoading: false,
	isError: false,
	isVerified: false,
	isAuth: false,
	isLicenseAccepted: false,
}

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(register.pending, state => {
			state.isLoading = true
			state.isError = false
		})
		builder.addCase(register.fulfilled, (state, action) => {
			state.user = action.payload.user
			state.error = null
			console.log(state.user)
			state.isLoading = false
			state.isError = false
			state.isVerified = true
			state.isAuth = true
			state.isLicenseAccepted = true
		})
		builder.addCase(register.rejected, (state, action) => {
			state.user = null
			state.error = action.payload as string
			console.log(state.error)
			state.isLoading = false
			state.isError = true
			state.isLicenseAccepted = false
			state.isAuth = false
			state.isVerified = false
		})
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user
			state.error = null
			console.log(state.user)
			state.isLoading = false
			state.isError = false
			state.isVerified = true
			state.isAuth = true
			state.isLicenseAccepted = false
		})
		builder.addCase(login.rejected, (state, action) => {
			state.user = null
			state.error = action.payload as string
			console.log(state.error)
			state.isLoading = false
			state.isError = true
			state.isVerified = false
			state.isAuth = false
			state.isLicenseAccepted = false
		})
		builder.addCase(logout.fulfilled, (state, action) => {
			state.user = null
			state.isLoading = false
			state.isError = false
			state.isVerified = false
			state.isAuth = false
			state.isLicenseAccepted = false
		})
	},
})

export default AuthSlice.reducer
