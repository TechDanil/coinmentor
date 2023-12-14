export interface IInitialValuesRegister {
    username: string;
    password: string;
    email: string;
    isLicenseAccepted: boolean;
}

export const initialValuesRegister: IInitialValuesRegister = {
    username: "",
    password: "",
    email: "",
    isLicenseAccepted: false,
};