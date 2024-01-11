import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { authService } from '../../services/auth.service'
import {
	ILoginRequest,
	ILoginResponse,
	IRegisterRequest,
	IRegisterResponse,
} from '../../shared/interfaces/auth.interface'
import { removeToken, saveToken } from '../../utils/token/token'

export const register = createAsyncThunk<IRegisterResponse, IRegisterRequest>(
	'auth/register',
	async (data, { rejectWithValue }) => {
		try {
			const response = await authService.register(data)

			console.log('Registration Response:', response)

			if (response.data) {
				const token = response.data.accessToken
				console.log('Access Token:', token)
				saveToken(token)
			}

			localStorage.setItem('user', JSON.stringify(response.data.user))
			return response.data
		} catch (error: any) {
			return rejectWithValue(error.response.data.message as AxiosError)
		}
	}
)

export const login = createAsyncThunk<ILoginResponse, ILoginRequest>(
	'auth/login',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const response = await authService.login({
				email,
				password,
			})

			console.log(response)

			if (response.data) {
				const token = response.data.accessToken
				saveToken(token)
			}

			return response.data
		} catch (error: any) {
			return rejectWithValue(error.response.data.message as AxiosError)
		}
	}
)

export const logout = createAsyncThunk<void, void>(
	'auth/logout',
	async (_, { rejectWithValue }) => {
		try {
			const response = await authService.logout()

			if (response.data) {
				removeToken()
			}
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
