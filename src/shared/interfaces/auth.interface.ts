import { IUser } from "./user.interface";

export interface IRegisterRequest {
    username: string;
    email: string;
    password: string;
}

export interface IRegisterResponse {
    user: IUser;
    access_token: string;
}

export interface IRefreshResponse {
    access_token: string;
}