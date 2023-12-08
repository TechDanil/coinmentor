import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../shared/interfaces/user.interface";
import { register } from "./auth.actions";

interface IInitialState {
    user: IUser | null;
    isLoading: boolean;
    isError: boolean;
    isVerified: boolean;
    isAuth: boolean;
    isLicenseAccepted: boolean;
}

const initialState: IInitialState = {
    user: null,
    isLoading: false,
    isError: false,
    isVerified: false,
    isAuth: false,
    isLicenseAccepted: false
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        patchUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoading = false;
            state.isError = false;
            state.isVerified = true;
            state.isAuth = true;
            state.isLicenseAccepted = true;
        })
        builder.addCase(register.rejected, (state) => {
            state.user = null;
            state.isLoading = false;
            state.isError = true;
            state.isLicenseAccepted = false;
            state.isAuth = false;
            state.isVerified = false;
        });
    },
});

export const { patchUser } = AuthSlice.actions;
export default AuthSlice.reducer;