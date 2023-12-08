import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegisterRequest, IRegisterResponse } from "../../shared/interfaces/auth.interface";
import { saveToken } from "../../utils/token/token";
import { authService } from "../../services/auth.service";

export const register = createAsyncThunk<
    IRegisterResponse,
    IRegisterRequest
>('auth/register', async (data, { rejectWithValue }) => {
    try {
        const response = await authService.register(data);

        if (response.data) {
            const token = response.data.access_token;
            saveToken(token);
        }

        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
