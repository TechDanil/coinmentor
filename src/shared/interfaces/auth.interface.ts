import { IUser } from "./user.interface";

export interface IRegisterRequest {
    username: string;
    email: string;
    password: string;
}

export interface IRegisterResponse {
    user: IUser;
    accessToken: string;
}

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginRespone {
    user: IUser;
    accessToken: string;
}

export interface IVerifyResponse extends IUser {}

export interface IRefreshResponse {
    accessToken: string;
}